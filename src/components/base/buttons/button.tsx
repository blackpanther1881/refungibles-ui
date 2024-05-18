import React from "react";
import { ButtonProps } from "./types";
import styles from "./buttons.module.css";
import { emptyFunc } from "@/utils/number";

export const Button = ({
  onClick = emptyFunc,
  content,
  disabled = false,
  className,
  type = "primary",
  size = "medium"
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`appButton text-center box-border rounded-[8px] flex items-center justify-center ${styles[type]} ${styles[size]} ${className}`}
    >
      {content}
    </button>
  );
};
