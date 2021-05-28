import MyImage from "components/elements/Image";
import React, { useEffect, useRef, useState } from "react";
import { urlFor } from "utils/sanity";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Film } from "utils/sanity/types";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import Button from "components/elements/Button";
import Link from "components/elements/Link";

interface UpcomingReleasesProps {}

const UpcomingReleases: React.FC<{ films: Array<Film> }> = ({ films }) => {
  const [isPlaying, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
    return () => {};
  }, [isPlaying]);

  return (
    <>
      <Carousel
        className="my-12 full-width"
        useKeyboardArrows
        showThumbs={false}
      >
        {films.map((film) => {
          const movieBackgroundURL = (film[
            "movieBackgroundURL"
          ] as unknown) as string;
          return (
            <div
              key={film._id}
              className="relative flex flex-wrap items-center video-cta py-24 px-4 min-h-30rem"
            >
              {movieBackgroundURL ? (
                <div className="absolute inset-0 z-negative lg:opacity-100 opacity-50">
                  <video
                    ref={videoRef}
                    src={movieBackgroundURL}
                    autoPlay={isPlaying}
                    muted
                    loop
                    className="object-cover w-full h-full"
                  />
                </div>
              ) : (
                <MyImage
                  containerClassName="inset-0 w-full h-full z-negative static"
                  className="opacity-75"
                  nextImageProps={{
                    ...nextSanityImage(film.mainImage),
                    width: undefined,
                    height: undefined,
                    layout: "fill",
                    objectFit: "cover",
                  }}
                />
              )}

              <div className="relative container mx-auto text-center text-white w-full flex flex-wrap">
                <h3 className="md:text-5xl text-3xl font-sans font-bold tracking-widge mb-4 w-full leading-tight">
                  Releases Coming Soon
                </h3>
                <div className="w-full md:mb-16 mb-6">
                  <div className="inline-flex item-center justify-center text-white w-auto hover:opacity-75">
                    {movieBackgroundURL ? (
                      <Button
                        btnStyle="clear"
                        func={() => setPlaying(!isPlaying)}
                        className="text-white pt-0"
                      >
                        <svg
                          className="fill-current text-white w-8 h-8 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width={48}
                          height={48}
                          viewBox="0 0 48 48"
                        >
                          <title>ic_play_circle_outline_48px</title>
                          <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z" />
                        </svg>
                        <span className="border-b border-white pb-1">
                          {isPlaying ? "Pause Video" : "Play Video"}
                        </span>
                      </Button>
                    ) : (
                      <h4 className="md:text-2xl text-xl font-sans font-bold tracking-widge mb-4 w-full leading-tight">
                        {film.title}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="w-full">
                  <Link
                    hrefProp="filmmaker"
                    icon={{ name: "none" }}
                    btnStyle="clear"
                    func={() => setPlaying(!isPlaying)}
                    className="text-white inline-flex items-center justify-center text-white border bg-transparent px-8 py-3 hover:bg-white hover:text-black md:mt-0 mt-4 "
                  >
                    All Videos +
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default UpcomingReleases;
