import MyImage from "components/elements/Image";
import Link from "components/elements/Link";
import NextLink from "next/link";
import React, { useState } from "react";
import { nextSanityImage } from "utils/sanity/nextSanityImage";
import { Film } from "utils/sanity/types";

interface LatestReleasesProps {
  films: Film[];
}

function mod(x, m) {
  return ((x % m) + m) % m;
}

const LatestReleases: React.FC<LatestReleasesProps> = ({ films }) => {
  const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     }
  // }, [input])

  function handleSliderDistance() {
    if (films.length <= 2) return 0;
    return mod(imageIndex + 1, films.length);
  }
  return (
    <>
      <div className="bx-container mx-auto my-6 lg:px-8 px-4">
        <ul className="flex items-center leading-normal text-gray-500 font-alt">
          <li className="text-white md:text-3xl text-xl  font-sans m-0 md:leading-none pb-2">
            Our latest releases |
          </li>

          <li className="">
            <Link
              hrefProp={`films`}
              className="text-brand px-2 py-2"
              text="View all"
            />
          </li>
        </ul>
      </div>
      <div
        className={`flex items-stretch justify-start mb-10 overflow-scroll relative transition duration-500 ease-in-out "container px-5 sm:px-6 lg:px-8  mx-auto my-6 lg:px-8 px-4`}
      >
        {films?.map((film) => (
          <NextLink
            key={film._id}
            href={`/films/${film.slug.current}`}
            passHref
          >
            <a
              href="#0"
              className="relative group block mr-4 flex-shrink-0 transition duration-500 ease-in-out"
              style={{
                transform: `translateX(-${imageIndex * 75 + imageIndex * 20}%)`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-75 hidden group-hover:flex flex-col justify-end text-white px-4 py-4 cursor-pointer">
                <div>
                  <h3 className="text-lg mb-2">{film.title}</h3>
                  <p className="leading-normal">{film.blurb}</p>
                </div>
              </div>

              <MyImage
                nextImageProps={{
                  ...nextSanityImage(film.mainImage),
                  // width: undefined,
                  // height: undefined,
                  // layout: "fill",
                  // objectFit: "cover",
                }}
              />
            </a>
          </NextLink>
        ))}

        <button
          onClick={() => setImageIndex(handleSliderDistance())}
          className={` absolute z-10 p-2 -full block right-0 inset-y-0 mr-1 hidden ${
            films.length > 2 ? "md:block" : ""
          }`}
        >
          <svg
            className="fill-current text-white w-6 h-6 hover:text-brand"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
          >
            <title>arrow-right</title>
            <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default LatestReleases;
