import NextLink from "next/link";
import React, { ReactNode } from "react";
import ReactTooltip from "react-tooltip";
import { handleSlug } from "utils/sanity";
import { slugify } from "utils/stringUtils";
import { btnStyles, ButtonProps } from "./Button";
import Icon from "./Icon";
import SocialIcon from "./SocialIcon";

// const LinkStyle = styled(ButtonStyle)`
//     --icon-rotate: ${({ icon, back }) => (back ? '180deg' : 0)};
//     border-color: ${({ theme, btnStyle }) => (btnStyle === 'clear' ? 'transparent' : 'currentColor')};
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;

//     p & {
//         font-family: inherit;
//         padding: 0;
//         color: inherit;
//         i {
//             display: none;
//         }
//         span {
//             font-family: inherit;
//             font-size: inherit;
//             font-weight: inherit;
//             font-style: inherit;
//             text-decoration: underline;
//             color: currentColor;
//         }
//     }
//     svg {
//         width: 2rem;
//     }
// `;

interface LinkProps extends ButtonProps {
  hrefProp: string;
  children?: ReactNode;
  back?: boolean;
  as?: string;
  scroll?: boolean;
  external?: boolean;
  target?: "_self" | "_blank";
  rel?: string;
  eventLabel?: string | "To Checkout";
  trackerNames?: string[];
}

interface ElementLinkProps extends LinkProps {
  passThrough?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  text,
  hrefProp,
  children,
  scroll,
  as,
  className,
  func,
  back,
  disabled,
  btnStyle,
  title,
  icon,
  socialIcon,
  circle,
  tooltip,
  id,
  external,
  target,
  tabIndex,
}) => {
  return (
    <NextLink
      href={external ? handleSlug(hrefProp) : `/${handleSlug(hrefProp)}`}
      as={as}
      scroll={scroll}
      passHref
    >
      <a
        tabIndex={tabIndex}
        // layoutId={layoutId}

        // text={text}
        onClick={(e: any) => {
          func ? func({ e }) : null;
        }}
        className={`${
          /p[lrtbxy-]-?\d/.test(className || "") ? "" : "py-2 px-6"
        } ${
          className || ""
        } group inline-flex border-0 hover:opacity-50 text-lg ${
          btnStyle ? btnStyles[btnStyle] : ""
        }  `}
        title={
          title ||
          text ||
          `Open link${
            target === "_blank" && external ? " in a new window" : ""
          }`
        }
        data-tip={tooltip}
        data-for={slugify(tooltip || "")}
        id={id}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon || socialIcon ? (
          <span
            className={`flex items-center w-full ${
              icon?.name === "none" ? "justify-center" : "justify-between"
            }`}
          >
            <span className="text-wrapper">
              <span className={`currentColor mr-2`}>
                <> {text || children}</>
              </span>
            </span>
            {icon && (
              <Icon
                title={title || text}
                name={icon.name}
                fill={"currentColor"}
              />
            )}
            {socialIcon && (
              <SocialIcon
                title={title || text}
                name={socialIcon.name}
                fill={"currentColor"}
              />
            )}
          </span>
        ) : (
          <span className={`currentColor`}>{text || children}</span>
        )}

        {tooltip && (
          <ReactTooltip
            id={slugify(tooltip)}
            backgroundColor={"#fff"}
            textColor={"#000"}
            border
            borderColor={"#000"}
          />
        )}
      </a>
    </NextLink>
  );
};
export default Link;
Link.defaultProps = { icon: { name: "arrow" } };

export const ElementLink: React.FC<ElementLinkProps> = ({
  text,
  className,
  func,
  hrefProp,
  children,
  back,
  passThrough,
  as,
  tabIndex,
}) => {
  if (passThrough) {
    return <>{children}</>;
  }

  return (
    <NextLink href={hrefProp} as={as} passHref>
      <a
        href="#0"
        onClick={(e: any) => (func ? func({ e }) : null)}
        className={className || ""}
        tabIndex={tabIndex}
      >
        {children || text}
      </a>
    </NextLink>
  );
};
