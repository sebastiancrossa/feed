// Libraries
import React from "react";

// Styles
import { Card, PostButton } from "./userPostInput.style";
import CustomInput from "../../../../layout/components/Input";

export const UserPostInput = () => {
  return (
    <Card>
      <CustomInput type="text" placeholder="What's on your mind?" />
      <PostButton>POST</PostButton>
    </Card>
  );
};
