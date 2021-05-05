import React from "react";
import { capitalize } from "utils/stringFunctions";

// const IconStyles = styled.i`
//     display: inline-flex;
//     cursor: pointer;
//     transform: scale(var(--icon-scale, 1)) rotate(var(--icon-rotate, 0)) translate(var(--icon-translate, 0));
//     transition: all 300ms ease-in-out;
//     svg {
//         position: relative;
//     }

//     .icon-arrow {
//         top: 2px;
//     }
//     .icon-chevron {
//     }
// `;
export interface IconProps {
  title?: string;
  fill?: string;
  className?: string;
}

export interface DefaultIcons extends IconProps {
  name:
    | "arrow"
    | "arrow-thin"
    | "lock"
    | "chevron"
    | "chevron-right"
    | "close"
    | "animated-close"
    | "eye"
    | "star"
    | "hamburger"
    | "mail"
    | "minus"
    | "plus"
    | "search"
    | "home"
    | "none";
}

const Icon: React.FC<DefaultIcons> = ({ name, title, fill, className }) => {
  if (name === "none") return <div />;
  return (
    <div
      className={`Icon-container ${className || ""}`}
      title={title || capitalize(name)}
      data-icontype={name}
    >
      {name === "arrow" && (
        <svg
          className="icon icon-arrow"
          width="23"
          height="12"
          viewBox="0 0 23 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0714 7.05137L15.6925 10.5132L17.1436 12L23 6.00006L17.1437 0L15.6926 1.4868L19.0715 4.94872L0 4.94871V7.05137L19.0714 7.05137Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "arrow-thin" && (
        <svg
          className="icon icon-arrow"
          width="35"
          height="76"
          viewBox="0 0 35 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.3241 52.4287L17.662 74.5314L1.00033 52.4283"
            stroke={fill || "currentColor"}
          />
          <line
            x1="17.621"
            y1="74.2861"
            x2="17.621"
            y2="0.000419559"
            stroke={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "home" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          height="1em"
          width="1em"
          viewBox="194 -104 1000 1250"
        >
          <g>
            <path d="M969.7,321.1L705.4,46.3c-0.1-0.1-0.2-0.1-0.2-0.2c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.2-0.4-0.3   c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.2-0.4-0.3-0.6-0.5s-0.4-0.3-0.7-0.5c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.1-0.5-0.3-0.7-0.4   c-0.2-0.1-0.5-0.2-0.7-0.3c-0.2-0.1-0.5-0.2-0.7-0.3c-0.2-0.1-0.5-0.2-0.7-0.3c-0.2-0.1-0.5-0.2-0.7-0.2c-0.3-0.1-0.5-0.1-0.8-0.2   c-0.2-0.1-0.5-0.1-0.7-0.2c-0.3-0.1-0.5-0.1-0.8-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.3,0-0.5,0-0.8-0.1c-0.2,0-0.5,0-0.7,0   c-0.3,0-0.5,0-0.7,0c-0.3,0-0.5,0-0.8,0.1c-0.2,0-0.5,0.1-0.7,0.1c-0.3,0-0.5,0.1-0.8,0.1c-0.2,0-0.5,0.1-0.7,0.2   c-0.3,0.1-0.5,0.1-0.8,0.2c-0.2,0.1-0.5,0.1-0.7,0.2c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3c-0.2,0.1-0.5,0.2-0.7,0.3   c-0.2,0.1-0.5,0.3-0.7,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.3-0.7,0.5c-0.2,0.2-0.4,0.3-0.6,0.5c-0.2,0.2-0.4,0.4-0.6,0.5   c-0.1,0.1-0.2,0.2-0.4,0.3c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.2,0.2L418.3,321.1c-6,6.3-5.8,16.2,0.5,22.2   c3.1,2.9,7,4.4,10.9,4.4c4.1,0,8.3-1.6,11.4-4.8l253-263l253,263c3.1,3.2,7.2,4.8,11.4,4.8c3.9,0,7.8-1.5,10.9-4.4   C975.5,337.3,975.7,327.4,969.7,321.1z" />
            <polygon points="466.4,350.6 466.4,351.9 921.6,351.9 921.6,350.6 694,113.9  " />
            <path d="M466.4,508h455.3V383.3H466.4V508z M694,401.1c11.6,0,21,9.4,21,20.9c0,11.6-9.4,20.9-21,20.9s-21-9.4-21-20.9   C673,410.4,682.4,401.1,694,401.1z" />
            <path d="M466.4,613.7c0,30.8,25,55.7,55.8,55.7h18.7v66.5c0,8.1,6.6,14.6,14.7,14.6h39.9c8.1,0,14.7-6.6,14.7-14.6v-66.5H778v66.5   c0,8.1,6.6,14.6,14.7,14.6h39.9c8.1,0,14.7-6.6,14.7-14.6v-66.5H866c30.8,0,55.8-24.9,55.8-55.7v-74.3H466.4V613.7z M694,557   c11.6,0,21,9.4,21,20.9c0,11.6-9.4,20.9-21,20.9s-21-9.4-21-20.9C673,566.3,682.4,557,694,557z" />
          </g>
        </svg>
      )}

      {name === "animated-close" && (
        <svg id="svg" width="1em" height="1em" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      )}
      {name === "eye" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 91 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M78.0791 32.4252C69.2791 41.2252 57.5791 46.1252 45.0791 46.1252C32.5791 46.1252 20.8791 41.2252 12.0791 32.4252L4.8791 25.1252L12.0791 17.8252C20.8791 9.02524 32.5791 4.12524 45.0791 4.12524C57.5791 4.12524 69.2791 9.02524 78.0791 17.8252L85.2791 25.1252L78.0791 32.4252ZM29.0791 25.1252C29.0791 16.3252 36.2791 9.12524 45.0791 9.12524C53.8791 9.12524 61.0791 16.3252 61.0791 25.1252C61.0791 33.9252 53.8791 41.1252 45.0791 41.1252C36.2791 41.1252 29.0791 33.9252 29.0791 25.1252Z"
            fill={fill || "currentColor"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M80.8791 15.0252L89.4791 23.7252C90.2791 24.5252 90.2791 25.7252 89.4791 26.5252L80.8791 35.2252C71.3791 44.8252 58.6791 50.1252 45.0791 50.1252C31.4791 50.1252 18.7791 44.8252 9.2791 35.2252L0.679102 26.5252C-0.120898 25.7252 -0.120898 24.5252 0.679102 23.7252L9.2791 15.0252C18.7791 5.42525 31.4791 0.125244 45.0791 0.125244C58.6791 0.125244 71.3791 5.42525 80.8791 15.0252ZM45.0791 46.1252C57.5791 46.1252 69.2791 41.2252 78.0791 32.4252L85.2791 25.1252L78.0791 17.8252C69.2791 9.02524 57.5791 4.12524 45.0791 4.12524C32.5791 4.12524 20.8791 9.02524 12.0791 17.8252L4.8791 25.1252L12.0791 32.4252C20.8791 41.2252 32.5791 46.1252 45.0791 46.1252Z"
            fill={fill || "currentColor"}
          />
          <path
            d="M54.3609 25.1252C54.3609 30.3567 50.2053 34.5976 45.079 34.5976C39.9527 34.5976 35.797 30.3567 35.797 25.1252C35.797 19.8937 39.9527 15.6527 45.079 15.6527C50.2053 15.6527 54.3609 19.8937 54.3609 25.1252Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "lock" && (
        <svg
          className="icon icon-lock"
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="5"
            width="11"
            height="9"
            rx="2"
            fill={fill || "currentColor"}
          />
          <rect
            x="2.75"
            y="0.75"
            width="5.5"
            height="8.5"
            rx="2.75"
            stroke={fill || "currentColor"}
            strokeWidth="1.5"
          />
        </svg>
      )}
      {name === "chevron" && (
        <svg
          className="icon icon-chevron"
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.264249 0.283217C-0.0880836 0.660839 -0.0880828 1.27309 0.26425 1.65071L6.85711 8.71678C7.12696 9.006 7.52521 9.07371 7.85518 8.91991C7.96252 8.87272 8.06308 8.8024 8.15025 8.70898L14.7358 1.65073C15.0881 1.27311 15.0881 0.66086 14.7358 0.283236C14.3834 -0.0943876 13.8122 -0.0943876 13.4598 0.283236L7.50004 6.67088L1.54016 0.283217C1.18783 -0.0944055 0.616582 -0.0944055 0.264249 0.283217Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "chevron-right" && (
        <svg
          width="10"
          height="16"
          viewBox="0 0 10 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.362318 15.361C0.73994 15.7133 1.35219 15.7133 1.72981 15.361L8.79588 8.76813C9.0851 8.49829 9.15281 8.10003 8.99901 7.77006C8.95182 7.66273 8.88151 7.56216 8.78808 7.475L1.72983 0.889493C1.35221 0.537162 0.739961 0.537162 0.362338 0.889493C-0.015286 1.24182 -0.015286 1.81307 0.362338 2.1654L6.74998 8.12521L0.362318 14.0851C-0.015304 14.4374 -0.015304 15.0087 0.362318 15.361Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "close" && (
        <svg
          className="icon icon-close"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0L16 2L2.00009 16L9.89602e-05 14L14 0Z"
            fill={fill || "currentColor"}
          />
          <path
            d="M1.99999 0L0 2L13.9999 16L15.9999 14L1.99999 0Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "hamburger" && (
        <svg
          className="icon icon-hamburger"
          width="21"
          height="12"
          viewBox="0 0 21 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1C0 1.55228 0.447715 2 1 2H20C20.5523 2 21 1.55228 21 1C21 0.447715 20.5523 0 20 0H1C0.447715 0 0 0.447715 0 1Z"
            fill={fill || "currentColor"}
          />
          <path
            d="M0 6C0 6.55228 0.447715 7 1 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H1C0.447715 5 0 5.44772 0 6Z"
            fill={fill || "currentColor"}
          />
          <path
            d="M0 11C0 11.5523 0.447715 12 1 12H20C20.5523 12 21 11.5523 21 11C21 10.4477 20.5523 10 20 10H1C0.447715 10 0 10.4477 0 11Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "mail" && (
        <svg
          className="icon icon-mail"
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.209 5.15814C6.0372 5.15814 0 1.7346 0 1.7346V1.2C0 0.5376 0.5376 0 1.2012 0H13.2168C13.881 0 14.4186 0.5376 14.4186 1.2L14.409 1.8C14.409 1.8 8.4372 5.15814 7.209 5.15814Z"
            fill={fill || "currentColor"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.209 6.80812C8.4936 6.80812 14.409 3.59998 14.409 3.59998L14.4186 10.8C14.4186 11.4624 13.881 12 13.2168 12H1.2012C0.5382 12 0 11.4624 0 10.8L0.0096 3.59998C0.0096 3.59998 6.0372 6.80812 7.209 6.80812Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
      {name === "minus" && (
        <svg
          className="icon icon-minus"
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H13"
            stroke={fill || "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {name === "plus" && (
        <svg
          className="icon icon-plus"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7H13M7 13L7 1"
            stroke={fill || "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {name === "search" && (
        <svg
          className="icon icon-search"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5231 12.4625L15.1577 16.197M14 7.5C14 11.0899 11.0899 14 7.5 14C3.91015 14 1 11.0899 1 7.5C1 3.91015 3.91015 1 7.5 1C11.0899 1 14 3.91015 14 7.5Z"
            stroke={fill || "currentColor"}
            strokeWidth="1.5"
          />
        </svg>
      )}
      {name === "star" && (
        <svg
          className="icon icon-star"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.99994 0L11.0206 6.21885H17.5594L12.2694 10.0623L14.29 16.2812L8.99994 12.4377L3.70987 16.2812L5.7305 10.0623L0.44043 6.21885H6.97931L8.99994 0Z"
            fill={fill || "currentColor"}
          />
        </svg>
      )}
    </div>
  );
};

export default Icon;
