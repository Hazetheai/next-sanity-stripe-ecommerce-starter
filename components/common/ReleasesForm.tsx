import React from "react";
import { BaseForm } from "./BaseForm";

interface ReleasesFormProps {}

const ReleasesForm: React.FC<ReleasesFormProps> = ({}) => {
  return (
    <div className="container max-w-7xl relative mx-auto lg:my-12 lg:px-12 ">
      <div className=" md:border-l border-white text-white   px-8 py-4">
        <p className="opacity-75">My Newsletter</p>
        <h3 className="md:text-4xl text-xl font-sans font-bold mb-4">
          See it First
        </h3>

        <BaseForm
          endpoint="newsletter"
          className="mr-6 flex flex-wrap  justify-start"
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
    </div>
  );
};

export default ReleasesForm;
