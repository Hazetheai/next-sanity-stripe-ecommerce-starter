import Link from "components/elements/Link";
import {
  contactAddress,
  defaultMetaTags,
  formatSocialLinks,
  SiteConfigFooter,
  Socials,
} from "config/general";
import React, { Fragment } from "react";
import { SiteConfig, Social } from "utils/sanity/types";
import { capitalize } from "utils/stringFunctions";

interface FooterProps {
  navigation: SiteConfigFooter;
  // text: SiteConfig["footerText"];
}

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  return (
    <footer className="text-gray-400  body-font border-t border-gray-800">
      <div className="container max-w-7xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 -full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">{defaultMetaTags.title}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{contactAddress}</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {navigation.map((nav) => (
            <div key={nav._key} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                {nav.title}
              </h2>
              <nav className="list-none mb-10">
                {nav.footerNavigationItem.map((item) => (
                  <li key={item._rev}>
                    <Link
                      hrefProp={
                        item._type === "product"
                          ? `products/${item.slug}`
                          : item.slug
                      }
                      btnStyle="clear"
                      icon={{ name: "none" }}
                      text={item.page || item.title}
                      className="text-gray-400 hover:text-white px-0 py-2"
                    />
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container items-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {defaultMetaTags.title} —
            {/* <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              @knyttneve
            </a> */}
          </p>
          <div
            className="ml-auto
          flex
          lg:flex-row
          flex-wrap
          px-4
          text-gray-900
          items-center
          bg-gray-200
          
          border
          bg-opacity-40
          border-gray-700
          focus:ring-2
          focus:ring-indigo-900
          focus:bg-transparent
          focus:border-indigo-500
          text-base
          outline-none
          text-gray-100
          py-1
          px-3
          leading-8
          transition-colors
          duration-200 ease-in-out"
          >
            {Socials.map((social) => (
              <Fragment key={social.handle}>
                <Link
                  hrefProp={formatSocialLinks(
                    social.channel as Social["channel"]
                  )}
                  text={""}
                  title={capitalize(social.channel)}
                  icon={{ name: "none" }}
                  socialIcon={{
                    name: social.channel as Social["channel"],
                  }}
                  external
                  target="_blank"
                  className="transform transition duration-500 ease-in-out hover:-translate-y-1"
                />
                <br />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
