import React from "react";

interface HeadingProps {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text?: string;
  className?: string;
}

const elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const Heading: React.FC<HeadingProps> = ({
  level,
  text,
  children,
  ...props
}) => {
  const childs = children || text;
  return React.createElement(elements[level] || elements.h1, props, childs);
};

Heading.defaultProps = {
  level: "h1",
};

export default Heading;
