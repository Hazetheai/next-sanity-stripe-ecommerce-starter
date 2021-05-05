import SimpleErrorBoundary from "./utils/SimpleErrorBoundary";
import NextImage, { ImageProps } from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import rmUndef from "utils/rmUndef";
import Link from "../elements/Link";

// const ImageWrapper = styled.div`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     overflow-y: hidden;
//     .photo-credits {
//         height: 20%;
//         max-height: 20rem;
//         width: 100%;
//         position: absolute;
//         bottom: 0px;
//         right: 0;
//         display: flex;
//         flex-direction: column;
//         justify-content: flex-end;
//         transition: ${({ theme }) => theme.transitions.base};
//         /* transition-delay: 400ms; */
//         opacity: 0;
//         background: linear-gradient(
//             0deg,
//             hsla(240, 100%, 2%, 0.01) 2%,
//             hsla(240, 100%, 2%, 0.6) 12%,
//             hsla(240, 100%, 2%, 0.6) 68%,
//             hsla(0deg, 0%, 100%, 0.01) 90%
//         );

//         & * {
//             /* pointer-events: auto; */
//             padding-top: 0;

//             color: ${({ theme }) => theme.colors.white};
//         }
//     }
//     &:hover .photo-credits {
//         transition: ${({ theme }) => theme.transitions.base};
//         opacity: 1;
//     }

//     .photo-credits-web,
//     .photo-credits-ig {
//         position: relative;
//         height: 35%;
//         max-height: 15rem;
//     }
//     &:hover .photo-credits-web,
//     &:hover .photo-credits-ig {
//         transform: translateY(-${({ theme }) => theme.spacing.xs});
//     }
// `;

export interface MyImageProps {
  thumbnails?: string[];
  currentImage?: number;
  // altText?: string;
  clickZoom?: boolean;
  link?: string;
  linkPassThrough?: boolean;
  // transformations?: string;
  loader?: "sanity";
  className?: string;
  nextImageProps: ImageProps;
  containerClassName?: string;
  photoCredits?: {
    creditName: string;
    creditUrl?: string;
    creditInstagram?: string;
  };
}

interface ThumbnailProps {
  thumbnails: string[];
  handler: (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    idx: number
  ) => void;
}

const ImageThumbnails: React.FC<ThumbnailProps> = ({ thumbnails, handler }) => {
  // No. of thumbnails must <= N. of images in query
  return (
    <div className="thumbnail-container">
      {thumbnails?.map((img, idx) => (
        <React.Fragment key={img}>
          {idx < 4 && (
            <NextImage
              onClick={(e) => {
                handler(e, idx);
              }}
              className="thumbnail"
              src={img}
              width={70}
              height={70}
              layout="intrinsic"
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const MyImage: React.FC<MyImageProps> = ({
  currentImage,
  thumbnails,
  clickZoom,
  link,
  linkPassThrough,
  loader = "sanity",
  className,
  photoCredits,
  nextImageProps,
  containerClassName,
}) => {
  const router = useRouter();

  return (
    <div
      className={`MyImage-container ${
        /static|relative|absolute/i.test(containerClassName || "")
          ? ""
          : "relative"
      } ${containerClassName}`}
    >
      <NextImage
        {...nextImageProps}
        alt={nextImageProps.alt || ""}
        onClick={
          (e) => (link && !linkPassThrough ? router.push(link) : null)
          // ? setSrc(e)
          // : null
        }
        className={`base-image ${className || ""} ${
          clickZoom ? "is-interactive" : ""
        }`}
      />
      {photoCredits && (
        <div className="photo-credits">
          {photoCredits.creditInstagram && (
            <Link
              className="photo-credits-ig"
              hrefProp={`${
                "https://www.instagram.com/" + photoCredits.creditInstagram
              }`}
              text={"@" + photoCredits.creditInstagram}
              btnStyle="clear"
              icon={{ name: "none" }}
              external
              target="_blank"
            />
          )}
          <Link
            className="photo-credits-web"
            hrefProp={`${photoCredits.creditUrl ? photoCredits.creditUrl : ""}`}
            text={photoCredits.creditName}
            btnStyle="clear"
            icon={{ name: "none" }}
            external
            target="_blank"
          />
        </div>
      )}
      {/* <SimpleErrorBoundary>
        {thumbnails ? (
          <ImageThumbnails thumbnails={thumbnails} handler={setSrc} />
        ) : null}
      </SimpleErrorBoundary> */}
    </div>
  );
};

export default MyImage;
