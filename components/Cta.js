import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Cta(props) {
  const { title, route, link } = props;
  // console.log(`title, route, link `, title, route, link);
  if (route && route.current) {
    return (
      <Link href={`/${route.current}`}>
        <a className="mt-3 text-indigo-400 inline-flex items-center">
          {title}{" "}
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </Link>
    );
  }

  if (link) {
    return (
      <a className="mt-3 text-indigo-400 inline-flex items-center" href={link}>
        {title}
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    );
  }

  return <a className="">{title}</a>;
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
};

export default Cta;
