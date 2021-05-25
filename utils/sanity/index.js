import MyImage from "components/elements/Image";
import Link from "components/elements/Link";
import Video from "components/elements/Video";
import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from "next-sanity";
import { sentenceCase, unhyphenate } from "utils/stringUtils";
import { nextSanityImage } from "./nextSanityImage";

const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
};

if (!config.projectId) {
  throw Error("The Project ID is not set. Check your environment variables.");
}
if (!config.dataset) {
  throw Error("The dataset name is not set. Check your environment variables.");
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subsscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export function handleSlug(slug) {
  if (typeof slug === "string") return slug;
  return slug?.current || "";
}
export function buildSanityLink(linkType, slug) {
  return linkType == "album"
    ? "albums/" + handleSlug(slug)
    : linkType == "film"
    ? "films/" + handleSlug(slug)
    : linkType == "song"
    ? "songs/" + handleSlug(slug)
    : linkType === "product"
    ? "products/" + handleSlug(slug)
    : handleSlug(slug);
}

// Set up Portable Text serialization
export const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {
    marks: {
      internalLink: ({ mark, children, markDefs }) => {
        const { internalLinkType, slug, handle, _type } = mark;

        const href = buildSanityLink(
          internalLinkType,
          handleSlug(slug || handle)
        );

        return (
          <>
            {handleSlug(slug || handle) ? (
              <Link
                hrefProp={href}
                btnStyle="clear"
                title={sentenceCase(unhyphenate(handleSlug(slug || handle)))}
                // title={internalLinkType}
              >
                {children}
              </Link>
            ) : (
              children
            )}
          </>
        );
      },
      link: ({ mark, children }) => {
        const { blank, href } = mark;
        MyLink.displayName = "MyLink";

        return (
          <MyLink
            external
            // TODO
            // target={mark.blank ? '_blank' : '_self'}
            target={mark.blank ? "_blank" : "_self"}
            rel={mark.blank ? "noopener" : undefined}
            hrefProp={href}
            btnStyle="clear"
          >
            {children}
          </MyLink>
        );
      },
    },

    types: {
      image: ({ node }) => {
        MyImage.displayName = "MyImage";

        const creditInstagram = node["creditInstagram"];
        const creditName = node["creditName"];
        const creditUrl = node["creditUrl"];

        return (
          <div
            className={`PortableText-inline-image ${
              node.centerImage ? "center" : ""
            }`}
          >
            <MyImage
              loader="sanity"
              photoCredits={
                !!creditName
                  ? { creditInstagram, creditName, creditUrl }
                  : undefined
              }
              nextImageProps={{
                ...nextSanityImage(node),
                alt: node.altText || "alternate image text",
              }}
            />
          </div>
        );
      },

      videoEmbed: ({ node }) => {
        const { url } = node;
        return <Video url={url} />;
      },
      // https://graph.facebook.com/v10.0/instagram_oembed?url=https://www.instagram.com/p/CMpX4uLncds/&access_token=293556799000014|ed86230b2c6014935f9b3ce42c7353ef
      // instagramPost: ({ node }) => {
      //     // props.name === 'instagramPost';

      //     return <IGPost url={node.url} />;
      // },
    },
  },
});

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

export const previewClient = createClient({
  ...config,
  useCdn: false,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
  usePreview ? previewClient : sanityClient;
