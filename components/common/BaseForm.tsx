import Button from "components/elements/Button";
import FormField, { FormFieldProps } from "components/elements/FormField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formatMergeFields } from "utils/newsletter";

interface BaseFormProps {
  fields: FormFieldProps[];
  endpoint: "newsletter" | "contact";
  className?: string;
  submitClassName?: string;
  presetValues?: { [key: string]: any };
}

export const BaseForm: React.FC<BaseFormProps> = ({
  fields,
  endpoint,
  className,
  submitClassName,
  presetValues,
}) => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    const pData = presetValues ? { ...data, ...presetValues } : data;
    // alert(JSON.stringify(pData));
    postData(pData);
  };

  const postData = (data) =>
    fetch(`/api/${endpoint}`, {
      body: JSON.stringify(
        endpoint === "newsletter" ? formatMergeFields(data) : data
      ),
      method: "post",
      headers: { accept: "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        reset();
        setSuccess(true);
        return res;
      })
      .catch(console.error);

  // useEffect(() => {
  //   handleSubmit(postData);
  //   // return () => {
  //   //   cleanup;
  //   // };
  // }, [input]);
  // make sure to read state before render to subscribe to the state update (Proxy).
  const { dirtyFields } = formState;

  // check your dev console, it's a Set

  return (
    <form className={className || ""} onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, idx) => (
        <FormField
          key={`${field.fieldType}-${field.register}-${idx}`}
          fieldType={field.fieldType || "text"}
          label={field.label}
          inputType={field.inputType || "text"}
          register={register(field.register)}
          options={field.options}
          className={field.className}
          inputClassName={field.inputClassName}
        />
      ))}

      <li className={`relative list-none flex flex-col ${submitClassName}`}>
        {success ? (
          <p className="text-3xl">
            Thanks for{" "}
            {endpoint === "newsletter"
              ? "signing up!"
              : "getting in touch. We'll get back to you as soon as possible."}{" "}
          </p>
        ) : (
          <Button
            noPadding
            text="Submit"
            type="submit"
            btnStyle="primary"
            className="justify-center border-2 py-2.5"
          />
        )}
      </li>
    </form>
  );
};
/* <FormField
        fieldType="text"
        label="First Name"
        register={register("firstName", { required: true })}
      />

      <FormField
        fieldType="text"
        label="Last Name"
        register={register("lastName", { required: true })}
      />

      <FormField
        fieldType="text"
        label="Email"
        register={register("email", { required: true })}
      />

      <FormField
        fieldType="text"
        label="Mobile Number"
        inputType="number"
        register={register("MobileNumber")}
      />

      <FormField
        fieldType="select"
        label="Title"
        inputType="text"
        register={register("title")}
        options={[
          { title: "Mr", value: "Mr" },
          { title: "Mrs", value: "Mrs" },
          { title: "Miss", value: "Miss" },
          { title: "Dr", value: "Dr" },
        ]}
      />

      <FormField
        fieldType="radio"
        label="Are you a developer?"
        inputType="number"
        register={register("developer")}
        options={[
          { title: "Yes", value: "Yes" },
          { title: "No", value: "No" },
        ]}
      />
      <FormField
        fieldType="checkbox"
        label="Are you a Checked Out?"
        inputType="text"
        register={register("checkbox")}
        options={[
          { title: "Yes", value: "Yes" },
          { title: "No", value: "No" },
        ]}
      /> */
