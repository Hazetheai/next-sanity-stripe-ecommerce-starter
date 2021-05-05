import React from "react";
import PropTypes from "prop-types";
import Link from "../elements/Link";
import { Cta as CTAProp } from "utils/sanity/types";

const Cta: React.FC<CTAProp> = (props) => {
  const { title, route, link } = props;
  // @ts-expect-error
  const routePrefix = route?._type === "product" ? "products/" : "";

  if (route && route["slug"]) {
    return (
      <Link
        hrefProp={`${routePrefix}${route["slug"].current}`}
        text={title}
        btnStyle="clear"
        className="text-indigo-500 hover:text-white"
      />
    );
  }

  if (link) {
    return (
      <Link
        hrefProp={`/${link}`}
        text={title}
        btnStyle="clear"
        className="text-indigo-500 hover:text-white"
        external
      />
    );
  }

  return (
    <a href="#0" className="">
      {title}
    </a>
  );
};

export default Cta;
