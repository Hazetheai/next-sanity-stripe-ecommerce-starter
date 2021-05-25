import React from "react";
import { BaseForm } from "./BaseForm";

interface ReleasesFormProps {}

const ReleasesForm: React.FC<ReleasesFormProps> = ({}) => {
  return (
    <div className="md:pl-3 md:border-l border-white text-white container relative mx-auto lg:my-12 lg:px-16  px-4 py-4">
      <p className="opacity-75">My Newsletter</p>
      <h3 className="md:text-4xl text-xl font-sans font-bold mb-4">
        See it First
      </h3>

      <BaseForm
        endpoint="newsletter"
        className="mr-6 flex flex-wrap justify-center lg:justify-start"
        fields={[
          // { fieldType: "text", label: "Full Name", register: "fullName" },
          {
            fieldType: "text",
            label: "Email",
            register: "email",
            inputType: "email",
            inputClassName: "-none",
          },
        ]}
        submitClassName="justify-end"
      />
    </div>
  );
};

export default ReleasesForm;
