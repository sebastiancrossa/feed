// Libraries
import React from "react";

// Styles
import { StyledInput, OuterContainer } from "./iconInput.style";

export const IconInput = ({ icon, withBottomMargin, ...props }) => {
  const Icon = icon;

  return (
    <OuterContainer
      style={{ width: "100%" }}
      withBottomMargin={withBottomMargin}
    >
      <Icon
        size={21}
        style={{ paddingTop: "0.2rem", color: "var(--color-gray)" }}
      />
      <StyledInput {...props} />
    </OuterContainer>
  );
};
