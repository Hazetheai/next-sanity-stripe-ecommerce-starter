const {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
  groq,
} = require("next-sanity");
const fs = require("fs");

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
const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Set up the live preview subsscription hook
const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
const PortableText = createPortableTextComponent({
  ...config,
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  serializers: {},
});

// Set up the client for fetching data in the getProps page functions
const sanityClient = createClient(config);
// Set up a preview client with serverless authentication for drafts

const previewClient = createClient({
  ...config,
  useCdn: false,
});

// Helper function for easily switching between normal client and preview client
const getClient = (usePreview) => (usePreview ? previewClient : sanityClient);

const globalQuery = groq`
*[_type == "siteConfig"]{
  mainNavigation[]->{...,page->},
  ...,
   footerNavigation[]{
  ...,
    footerNavigationItem[]->{
      ...,
      "page":page->title,
      "slug":slug.current
    }
  },
frontPage->,
}
`;

const socialsQuery = groq`
*[_type == "social"]{
  channel,
  handle
}
`;
module.exports = async () => {
  // fetch from wherever you've stored the layout
  const globalData = await getClient().fetch(globalQuery); // gets items from db or api
  const socialData = await getClient().fetch(socialsQuery); // gets items from db or api

  // save the result the public folder
  fs.writeFileSync("public/global-data.json", JSON.stringify(globalData));
  fs.writeFileSync("public/social-data.json", JSON.stringify(socialData));
};
