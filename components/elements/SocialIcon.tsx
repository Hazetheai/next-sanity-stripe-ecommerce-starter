import React from "react";
import { IconProps } from "./Icon";

export interface SocialIcons extends IconProps {
  name:
    | "twitter"
    | "instagram"
    | "instagram-r"
    | "linkedin"
    | "youtube"
    | "facebook"
    | "share";
}

const SocialIcon: React.FC<SocialIcons> = ({ name, fill, title }) => {
  return (
    <>
      {name === "youtube" && (
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6029 3.02999C19.3844 2.23091 18.7406 1.60167 17.9231 1.38811C16.4415 1 10.5 1 10.5 1C10.5 1 4.55851 1 3.07683 1.38811C2.25929 1.60167 1.61545 2.23091 1.39695 3.02999C1 4.47823 1 7.5 1 7.5C1 7.5 1 10.5217 1.39695 11.97C1.61545 12.7691 2.25929 13.3983 3.07683 13.612C4.55851 14 10.5 14 10.5 14C10.5 14 16.4415 14 17.9231 13.612C18.7406 13.3983 19.3844 12.7691 19.6029 11.97C20 10.5217 20 7.5 20 7.5C20 7.5 20 4.47823 19.6029 3.02999Z"
            fill={fill || "#000"}
            stroke="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.71875 10.6087V4.95654L13.4688 7.78274L8.71875 10.6087Z"
            fill="white"
          />
        </svg>
      )}
      {name === "facebook" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 9 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.98461 18V8.99895H8.64715L9 5.89713H5.98461L5.98913 4.34465C5.98913 3.53565 6.0715 3.10216 7.31663 3.10216H8.98115V0H6.31823C3.11963 0 1.9938 1.50471 1.9938 4.03517V5.89748H0V8.9993H1.9938V18H5.98461Z"
            fill={fill || "#000"}
          />
        </svg>
      )}
      {name === "twitter" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25447 3.72422L8.29132 4.32976L7.67715 4.25561C5.44156 3.97138 3.4885 3.00746 1.83023 1.38857L1.01953 0.5853L0.810707 1.17848C0.368503 2.50078 0.651022 3.89723 1.57228 4.83643C2.06362 5.35547 1.95307 5.42962 1.10551 5.12067C0.810707 5.0218 0.552755 4.94766 0.528188 4.98473C0.442204 5.07124 0.737006 6.19581 0.970392 6.64069C1.28976 7.25859 1.94078 7.86413 2.65322 8.22251L3.25511 8.50674L2.54267 8.5191C1.8548 8.5191 1.83023 8.53146 1.90393 8.79098C2.1496 9.59424 3.11999 10.4469 4.20094 10.8177L4.96251 11.0772L4.2992 11.4727C3.31653 12.0411 2.16189 12.3624 1.00724 12.3871C0.454487 12.3995 0 12.4489 0 12.486C0 12.6096 1.49858 13.3016 2.3707 13.5735C4.98708 14.3768 8.09479 14.0307 10.4286 12.659C12.0869 11.6827 13.7452 9.74254 14.519 7.86413C14.9367 6.86314 15.3543 5.03416 15.3543 4.15675C15.3543 3.58828 15.3911 3.51413 16.079 2.83445C16.4844 2.43899 16.8652 2.00646 16.9389 1.88288C17.0617 1.64808 17.0494 1.64808 16.423 1.85817C15.3789 2.22891 15.2315 2.17948 15.7474 1.62337C16.1282 1.22791 16.5826 0.511153 16.5826 0.301067C16.5826 0.263994 16.3984 0.325783 16.1896 0.437005C15.9685 0.560584 15.4771 0.745954 15.1086 0.857175L14.4453 1.06726L13.8434 0.659448C13.5118 0.437005 13.045 0.189846 12.7993 0.115698C12.1729 -0.0573131 11.2148 -0.0325972 10.6497 0.16513C9.11431 0.721238 8.14392 2.15476 8.25447 3.72422Z"
            fill={fill || "#000"}
          />
        </svg>
      )}
      {name === "instagram" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.67937 0.00228749C6.83873 0.00203806 7.01017 0.002115 7.19517 0.00219802L7.5001 0.00228749C9.94282 0.00228749 10.2323 0.0110562 11.197 0.0548997C12.089 0.0956932 12.5731 0.244761 12.8956 0.370001C13.3225 0.535844 13.6269 0.734092 13.9469 1.05434C14.2671 1.37459 14.4654 1.67959 14.6316 2.10658C14.7568 2.42874 14.906 2.91292 14.9466 3.80504C14.9905 4.7696 15 5.05935 15 7.50124C15 9.94313 14.9905 10.2329 14.9466 11.1974C14.9058 12.0896 14.7568 12.5737 14.6316 12.8959C14.4658 13.3229 14.2671 13.6269 13.9469 13.947C13.6267 14.2672 13.3227 14.4655 12.8956 14.6313C12.5735 14.7571 12.089 14.9058 11.197 14.9466C10.2325 14.9905 9.94282 15 7.5001 15C5.05718 15 4.76766 14.9905 3.80323 14.9466C2.91122 14.9054 2.4271 14.7564 2.10441 14.6311C1.67747 14.4653 1.37251 14.2671 1.0523 13.9468C0.732093 13.6266 0.53387 13.3223 0.367667 12.8951C0.242443 12.573 0.0932032 12.0888 0.0526055 11.1967C0.00876759 10.2321 0 9.94237 0 7.49895C0 5.05553 0.00876759 4.76731 0.0526055 3.80275C0.0933938 2.91064 0.242443 2.42645 0.367667 2.10392C0.533488 1.67692 0.732093 1.37192 1.0523 1.05167C1.37251 0.731424 1.67747 0.533175 2.10441 0.366951C2.42691 0.241139 2.91122 0.0924526 3.80323 0.0514684C4.6472 0.0133437 4.97427 0.00190624 6.67937 0V0.00228749ZM12.3836 1.52157C11.7775 1.52157 11.2858 2.0128 11.2858 2.61917C11.2858 3.22534 11.7775 3.71714 12.3836 3.71714C12.9897 3.71714 13.4815 3.22534 13.4815 2.61917C13.4815 2.01299 12.9897 1.52119 12.3836 1.52119V1.52157ZM2.80178 7.5031C2.80178 4.90815 4.90544 2.80425 7.50008 2.80425H7.49989C10.0945 2.80425 12.1976 4.90815 12.1976 7.5031C12.1976 10.0981 10.0947 12.201 7.50008 12.201C4.90544 12.201 2.80178 10.0981 2.80178 7.5031Z"
            fill={fill || "#000"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.50025 4.45337C9.18438 4.45337 10.5498 5.81881 10.5498 7.50335C10.5498 9.18769 9.18438 10.5533 7.50025 10.5533C5.81594 10.5533 4.45068 9.18769 4.45068 7.50335C4.45068 5.81881 5.81594 4.45337 7.50025 4.45337V4.45337Z"
            fill={fill || "#000"}
          />
        </svg>
      )}
      {name === "instagram-r" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 -0.000244141C6.71573 -0.000244141 0 6.71548 0 14.9998C0 23.284 6.71573 29.9998 15 29.9998C23.2843 29.9998 30 23.284 30 14.9998C30 6.71548 23.2843 -0.000244141 15 -0.000244141ZM11.702 7.04809C12.5554 7.00926 12.8281 6.99976 15.0007 6.99976H14.9983C17.1716 6.99976 17.4433 7.00926 18.2966 7.04809C19.1483 7.08709 19.73 7.22192 20.24 7.41976C20.7666 7.62393 21.2116 7.89727 21.6567 8.34227C22.1017 8.78694 22.375 9.23328 22.58 9.75945C22.7767 10.2681 22.9117 10.8495 22.9517 11.7011C22.99 12.5545 23 12.8271 23 14.9998C23 17.1725 22.99 17.4445 22.9517 18.2979C22.9117 19.1492 22.7767 19.7307 22.58 20.2396C22.375 20.7656 22.1017 21.2119 21.6567 21.6566C21.2121 22.1016 20.7665 22.3756 20.2405 22.5799C19.7315 22.7778 19.1495 22.9126 18.2978 22.9516C17.4444 22.9904 17.1726 22.9999 14.9998 22.9999C12.8272 22.9999 12.5547 22.9904 11.7014 22.9516C10.8499 22.9126 10.2684 22.7778 9.75936 22.5799C9.23352 22.3756 8.78719 22.1016 8.34268 21.6566C7.89784 21.2119 7.62451 20.7656 7.42 20.2394C7.22234 19.7307 7.0875 19.1494 7.04833 18.2977C7.00967 17.4444 7 17.1725 7 14.9998C7 12.8271 7.01 12.5543 7.04817 11.701C7.0865 10.8496 7.2215 10.2681 7.41984 9.75928C7.62484 9.23328 7.89818 8.78694 8.34318 8.34227C8.78785 7.89743 9.23419 7.6241 9.76036 7.41976C10.269 7.22192 10.8504 7.08709 11.702 7.04809Z"
            fill={fill || "#000"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.2831 8.44145C14.4225 8.44124 14.5724 8.4413 14.7341 8.44137L15.0008 8.44145C17.1368 8.44145 17.39 8.44912 18.2335 8.48745C19.0135 8.52312 19.4368 8.65346 19.7188 8.76296C20.0922 8.90796 20.3583 9.08129 20.6382 9.3613C20.9182 9.6413 21.0915 9.90797 21.2368 10.2813C21.3464 10.563 21.4769 10.9863 21.5124 11.7663C21.5507 12.6097 21.559 12.863 21.559 14.998C21.559 17.133 21.5507 17.3864 21.5124 18.2297C21.4767 19.0097 21.3464 19.4331 21.2368 19.7147C21.0918 20.0881 20.9182 20.3539 20.6382 20.6337C20.3582 20.9137 20.0923 21.0871 19.7188 21.2321C19.4372 21.3421 19.0135 21.4721 18.2335 21.5078C17.3901 21.5461 17.1368 21.5544 15.0008 21.5544C12.8646 21.5544 12.6114 21.5461 11.7681 21.5078C10.9881 21.4718 10.5647 21.3414 10.2826 21.2319C9.90923 21.0869 9.64256 20.9136 9.36256 20.6336C9.08256 20.3536 8.90922 20.0876 8.76389 19.7141C8.65439 19.4324 8.52388 19.0091 8.48838 18.2291C8.45005 17.3857 8.44238 17.1324 8.44238 14.996C8.44238 12.8597 8.45005 12.6077 8.48838 11.7643C8.52405 10.9843 8.65439 10.561 8.76389 10.279C8.90889 9.90564 9.08256 9.63897 9.36256 9.35896C9.64256 9.07896 9.90923 8.90562 10.2826 8.76029C10.5646 8.65029 10.9881 8.52029 11.7681 8.48445C12.5061 8.45112 12.7921 8.44112 14.2831 8.43945V8.44145ZM19.2711 9.77011C18.7411 9.77011 18.3111 10.1996 18.3111 10.7298C18.3111 11.2598 18.7411 11.6898 19.2711 11.6898C19.8011 11.6898 20.2311 11.2598 20.2311 10.7298C20.2311 10.1998 19.8011 9.76978 19.2711 9.76978V9.77011ZM10.8924 15C10.8924 12.7312 12.7318 10.8917 15.0006 10.8916C17.2694 10.8916 19.1084 12.7311 19.1084 15C19.1084 17.2688 17.2696 19.1075 15.0007 19.1075C12.7319 19.1075 10.8924 17.2688 10.8924 15Z"
            fill={fill || "#000"}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0007 12.3333C16.4734 12.3333 17.6674 13.5271 17.6674 14.9999C17.6674 16.4726 16.4734 17.6666 15.0007 17.6666C13.5278 17.6666 12.334 16.4726 12.334 14.9999C12.334 13.5271 13.5278 12.3333 15.0007 12.3333V12.3333Z"
            fill={fill || "#000"}
          />
        </svg>
      )}

      {name == "linkedin" && (
        <svg
          width="1em"
          fill="currentColor"
          height="1em"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>LinkedIn icon</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )}
      {name === "share" && (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.12549 15.0077 6.24919 15.0227 6.37063L8.08261 9.84066C7.54305 9.32015 6.80891 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15C6.80891 15 7.54305 14.6798 8.08261 14.1593L15.0227 17.6294C15.0077 17.7508 15 17.8745 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C17.1911 15 16.457 15.3202 15.9174 15.8407L8.97733 12.3706C8.99229 12.2492 9 12.1255 9 12C9 11.8745 8.99229 11.7508 8.97733 11.6294L15.9174 8.15934C16.457 8.67985 17.1911 9 18 9Z"
            fill="black"
          />
        </svg>
      )}
    </>
  );
};

export default SocialIcon;