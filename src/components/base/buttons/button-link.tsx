import React from "react";
import { ButtonLinkProps } from "./types";
import { emptyFunc } from "@/utils/number";

export const ButtonLink = ({
  link = "",
  content,
  className,
  type = "primary",
  size = "medium",
  onClick = emptyFunc,
  target = "_blank"
}: ButtonLinkProps) => {
  return (
    <a
      href={link}
      onClick={onClick}
      target={target}
      className={`py-2.5 px-4 appButton text-center box-border rounded-md flex items-center justify-center ${type} ${size} ${className}`}
    >
      {content}
    </a>
  );
};
