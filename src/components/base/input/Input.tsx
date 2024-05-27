import React from "react";
import { InputTextTypes } from "./types";
import { emptyFunc } from "@/utils/number";

export const InputText = ({
  autofocus = false,
  className,
  error,
  name,
  placeholder,
  required = true,
  type = "text",
  value,
  onChange = emptyFunc,
  disable = false,
  title = "",
  inputType = "normal"
}: InputTextTypes) => {
  const inputClass =
    inputType === "plain"
      ? "bg-transparent border-0 text-black-100 leading-normal " +
        "box-shadow-none font-normal text-3xl m-0 focus:border-0 focus:box-shadow-none text-left md:text-lg" +
        "p-0 placeholder:text-black-100 placeholder:leading-normal placeholder:font-normal outline-none"
      : "";

  return (
    <div className="flex flex-1 justify-end">
      <input
        title={title}
        type={type}
        className={`${inputClass} ${className}`}
        name={name}
        placeholder={placeholder}
        autoFocus={autofocus}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disable}
        autoComplete={"off"}
        onWheel={(e) => (e.target as HTMLInputElement).blur()}
      />
      <p className="error">{error}</p>
    </div>
  );
};
