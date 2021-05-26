import { BaseForm } from "components/common/BaseForm";
import Heading from "components/elements/Title";
import {
  contactAddress,
  contactEmail,
  formatSocialLinks,
  socialLinks,
} from "config/general";
import React from "react";
import { Form as FormProps } from "utils/sanity/types";

const Form: React.FC<FormProps> = ({ formType, tagline, title }) => {
  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          {title && (
            <Heading
              className="sm:text-3xl text-center text-2xl font-medium title-font mb-4"
              level="h3"
            >
              {title}
            </Heading>
          )}
          {tagline && (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {tagline}
            </p>
          )}
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <BaseForm
            className={"flex flex-wrap -m-2"}
            submitClassName={"p-2 w-full"}
            endpoint={formType}
            fields={[
              {
                fieldType: "text",
                label: "Full Name",
                register: "name",
                className: "p-2 w-1/2",
                inputClassName: "w-full",
              },
              {
                fieldType: "text",
                label: "Email",
                register: "email",
                inputType: "email",
                className: "p-2 w-1/2",
                inputClassName: "w-full",
              },
              {
                fieldType: "text",
                label: "Subject",
                register: "subject",
                inputType: "text",
                className: "p-2 w-full",
                inputClassName: "w-full",
              },
              {
                fieldType: "textarea",
                label: "Message",
                register: "message",
                inputType: "text",
                className: "p-2 w-full",
                inputClassName: "w-full",
              },
            ]}
          />
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            <a className="text-indigo-400">{contactEmail}</a>
            <address className="leading-normal my-5">{contactAddress}</address>
            <span className="inline-flex">
              <a
                href={formatSocialLinks("facebook")}
                className="text-gray-500 facebook"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href={formatSocialLinks("twitter")}
                className="ml-4 text-gray-500 twitter"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href={formatSocialLinks("instagram")}
                className="ml-4 text-gray-500 instagram"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
