import { BaseForm } from "components/common/BaseForm";
import Heading from "components/elements/Heading";
import React from "react";
import { Form as FormProps } from "utils/sanity/types";

const Form: React.FC<FormProps> = ({ formType, tagline, title }) => {
  return (
    <div className="container max-w-7xl px-5 py-24 mx-auto">
      {title && (
        <Heading
          className="sm:text-3xl text-center text-2xl font-medium title-font mb-4"
          level="h3"
        >
          {title}
        </Heading>
      )}
      {tagline && (
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
          {tagline}
        </p>
      )}
      <div className="flex justify-center w-full px-5 pb-8">
        <BaseForm
          className={
            "flex flex-wrap md:flex-nowrap w-full md:w-auto flex-col sm:flex-row items-end md:space-x-4 space-y-4"
          }
          endpoint={formType}
          submitClassName="sm:w-1/2 px-1 md:w-auto"
          fields={[
            {
              fieldType: "text",
              label: "First Name",
              register: "firstName",
              className: "sm:w-1/2 px-1 w-full md:w-auto",
            },
            {
              fieldType: "text",
              label: "Last Name",
              register: "lastName",
              className: "sm:w-1/2 px-1 w-full md:w-auto",
            },
            {
              fieldType: "text",
              label: "Email",
              register: "email",
              inputType: "email",
              className: "sm:w-1/2 px-1 w-full md:w-auto",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Form;
