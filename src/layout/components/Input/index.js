// Libraries
import React from "react";

// Style
import { CustomInput } from "./input.style";

const Input = ({ children, ...props }) => {
  return <CustomInput {...props}>{children}</CustomInput>;
};

export default Input;
