import React from "react";
import { SpinnerTypes } from "./types";
import styles from "./spinner.module.css";

export const Spinner = ({ size = "medium", className }: SpinnerTypes) => (
  <span
    className={` ${styles[size]} spinner w-6 h-6 light icon-toast inline-block align-text-bottom rounded-full ${className}`}
  />
);
