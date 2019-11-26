// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../../App";
import useInputState from "../../../../hooks/useInputState";

// Styles
import { Card, PostButton } from "./userPostInput.style";
import CustomInput from "../../../../layout/components/Input";

export const UserPostInput = () => {
  const [postText, updatePostText, resetPostText] = useInputState("");
  const AppState = useContext(AppContext);

  return (
    <Card>
      <CustomInput
        type="text"
        placeholder="What's on your mind?"
        value={postText}
        onChange={updatePostText}
      />
      <PostButton
        onClick={() => {
          if (AppState) {
            AppState.setPostList([
              {
                name: AppState.selectedUser,
                text: postText
              },
              ...AppState.postList
            ]);
          }

          resetPostText();
        }}
      >
        POST
      </PostButton>
    </Card>
  );
};
