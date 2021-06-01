/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Hero as HeroProps } from "utils/sanity/types";
import { PortableText, urlFor } from "utils/sanity";
import Link from "components/elements/Link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const HeroHalfScreen: React.FC<HeroProps> = ({
  heading,
  backgroundImage,
  tagline,
  ctas,
}) => {
  return (
    <div className="relative bg-black overflow-hidden border-b border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-max lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="lg:min-h-40rem mx-auto max-w-7xl flex items-center px-4 sm: sm:px-6 md: lg: lg:px-20 xl:px-36">
            <div className="lg:text-left">
              <div className="font-extrabold text-white">
                <h1 className="text-4xl tracking-tight ">
                  <span className="block xl:inline sm:text-5xl md:text-6xl">
                    {heading}
                  </span>{" "}
                </h1>

                <Link
                  text={"Composer"}
                  hrefProp="composer"
                  noPaddingX
                  btnStyle="clear"
                  icon={{ name: "none" }}
                  className=" text-indigo-300 text-xl sm:text-4xl border-b border-gray-800 hover:border-gray-100"
                />
                <span className=" text-white text-xl sm:text-4xl xl:inline px-4 pl-2">
                  /
                </span>
                <Link
                  text={"Filmmaker"}
                  hrefProp="filmmaker"
                  noPaddingX
                  btnStyle="clear"
                  icon={{ name: "none" }}
                  className=" text-indigo-900 text-xl sm:text-4xl border-b border-gray-800 hover:border-gray-100"
                />
              </div>

              {tagline && (
                <PortableText
                  className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 PortableText-container"
                  blocks={tagline}
                />
              )}

              {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={urlFor(backgroundImage).url() || ""}
          alt={heading}
        />
      </div>
    </div>
  );
};

export default HeroHalfScreen;
