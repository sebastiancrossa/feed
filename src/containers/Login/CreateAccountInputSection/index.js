// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { withRouter } from "react-router";
import useInputState from "../../../hooks/useInputState";

// Styles
import { NewCard, CreateAccount } from "./createAccountInputSection";
import {
  Heading,
  Subtitle,
  InputContainer
} from "../InputSection/inputSection.style";

const CreateAccountInputSection = ({ history }) => {
  const [username, updateUsername, resetUsername] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  const AppState = useContext(AppContext);

  const createAccount = async () => {
    if (AppState) {
      AppState.setUserList([
        ...AppState.userList,
        {
          name: username,
          password: password,
          followers: []
        }
      ]);
    }
  };

  return (
    <NewCard>
      <Heading>Create account</Heading>

      <InputContainer>
        <Subtitle>Username</Subtitle>
        <input type="text" value={username} onChange={updateUsername} />
      </InputContainer>

      <InputContainer>
        <Subtitle>Password</Subtitle>
        <input type="password" value={password} onChange={updatePassword} />
      </InputContainer>

      <CreateAccount
        onClick={() => {
          createAccount();

          resetUsername();
          resetPassword();
        }}
      >
        Create account
      </CreateAccount>
    </NewCard>
  );
};

export default withRouter(CreateAccountInputSection);
