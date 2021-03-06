import React from "react";

export interface FormFieldProps {
  fieldType: "text" | "textarea" | "select" | "radio" | "checkbox";
  //   name: string;
  label: string;
  register: any;
  options?: Array<{ title: string; value: any }>;
  multiple?: boolean;
  inputType?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  className?: string;
  inputClassName?: string;
}
// Styles = https://tailwindcss-custom-forms.netlify.app/
const FormField: React.FC<FormFieldProps> = ({
  fieldType,
  label,
  register,
  inputType = "text",
  options,
  multiple,
  className,
  inputClassName,
}) => {
  return (
    <li
      className={`relative items-start list-none flex flex-col ${
        className || ""
      }`}
    >
      <label
        htmlFor={`${fieldType}-${label}`}
        className="leading-7 text-sm text-gray-400"
      >
        {label}
      </label>
      {fieldType === "text" && (
        <input
          id={`${fieldType}-${label}`}
          type={inputType}
          {...register}
          placeholder={label}
          className={`form-input text-gray-900 border-2 py-3 ${
            inputClassName || ""
          }`}
        />
      )}
      {fieldType === "textarea" && (
        <textarea
          className={`form-textarea text-black ${inputClassName || ""}`}
          id={`${fieldType}-${label}`}
          type={inputType}
          {...register}
          rows={5}
        />
      )}

      {(fieldType === "radio" || fieldType === "checkbox") &&
        options &&
        options.map((option) => (
          <div className="flex items-center">
            <input
              id={`${fieldType}-${label}`}
              type={fieldType}
              value={option.value}
              {...register}
              className={`form-${fieldType} mr-2`}
            />
            <span>{option.title}</span>
          </div>
        ))}
      {fieldType === "select" && (
        <select
          className={`form-${multiple ? "multi" : ""}select`}
          multiple={multiple}
          id={`${fieldType}-${label}`}
          // type={inputType}
          {...register}
        >
          {options?.map((option, idx) => (
            <option
              key={`${option.title}-${option.value}-${idx}`}
              value={option.value}
            >
              {option.title}
            </option>
          ))}
        </select>
      )}
    </li>
  );
};

export default FormField;
