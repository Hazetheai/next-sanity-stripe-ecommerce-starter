import React from "react";
import ReactTooltip from "react-tooltip";
import { slugify } from "utils/stringUtils";
import Icon, { DefaultIcons } from "./Icon";
import SocialIcon, { SocialIcons } from "./SocialIcon";

export type ButtonType =
  | "primary"
  | "secondary"
  | "accent"
  | "accent-soft"
  | "clear";

export const btnStyles = {
  primary: `bg-transparent  border-2 hover:bg-white hover:text-gray-900`,
  secondary: `bg-transparent  border-b-2 hover:bg-white hover:text-gray-900`,
  accent: `bg-indigo-800 hover:bg-indigo-900 text-white`,
  "accent-soft": `bg-indigo-100 hover:bg-indigo-200`,
  clear: `bg-transparent py-0 text-white`,
};

export interface ButtonStyleProps {
  back?: boolean;
  btnStyle?: ButtonType;
  layoutId?: string;
  disabled?: boolean;
  icon?: DefaultIcons;
  socialIcon?: SocialIcons;
  circle?: boolean;
  text?: string;
  tabIndex?: number;
  autoFocus?: boolean;
}

interface ButtonFuncProps {
  e: any;
}

export interface ButtonProps extends ButtonStyleProps {
  title?: string;
  className?: string;
  func?: ({ e }: ButtonFuncProps) => void;
  tooltip?: string;
  id?: string;
  asElement?: "a";
  type?: "button" | "reset" | "submit";
  noPaddingY?: boolean;
  noPaddingX?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  func,
  back,
  disabled,
  layoutId,
  btnStyle = "secondary",
  title,
  icon,
  socialIcon,
  circle,
  tooltip,
  id,
  asElement,
  tabIndex,
  children,
  noPaddingY,
  noPaddingX,
  type = "button",
}) => {
  const ref = React.useRef(null);
  //   const mouse = usePointer(ref, {
  //     enterDelay: 100,
  //     leaveDelay: 100,
  //   });

  return (
    <button
      type={type}
      tabIndex={tabIndex}
      ref={ref}
      // layoutId={layoutId}
      // text={text}
      onClick={(e: any) => (func ? func({ e }) : null)}
      onKeyDown={(e: any) => e.key === "Enter" && (func ? func({ e }) : null)}
      onTouchMove={(e: any) => (func ? func({ e }) : null)}
      //   Styling
      className={`${noPaddingY ? "" : "py-2"} ${noPaddingX ? "" : "px-6"}
      inline-flex border-0 text-lg transition ${
        btnStyle ? btnStyles[btnStyle] : ""
      } ${className || ""}
      `}
      //   Styling End

      disabled={disabled}
      // btnStyle={btnStyle}
      title={title || text}
      // icon={icon}
      // back={back}
      // circle={circle}
      data-tip={tooltip}
      data-for={slugify(tooltip || "")}
      id={id}
      // as={asElement}
    >
      {icon || socialIcon ? (
        <div
          className={`flex items-center w-full  ${
            icon?.name === "none" ? "justify-center" : "justify-between"
          }`}
        >
          <span className="text-wrapper mr-2">
            <span className={`currentColor`}>{text || children}</span>
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
        </div>
      ) : (
        <span className={`currentColor flex`}>{text || children}</span>
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
    </button>
  );
};

export default Button;
