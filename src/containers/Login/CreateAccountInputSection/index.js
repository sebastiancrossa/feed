// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { withRouter } from "react-router";
import useInputState from "../../../hooks/useInputState";
import { MdPerson, MdLock } from "react-icons/md";

// Component imports
import { IconInput } from "../../../layout/components/IconInput";

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
          friends: []
        }
      ]);
    }
  };

  return (
    <NewCard>
      <Heading>Create account</Heading>

      <InputContainer>
        <Subtitle>Username</Subtitle>
        <IconInput
          icon={MdPerson}
          type="text"
          value={username}
          onChange={updateUsername}
          placeholder="Username..."
        />
      </InputContainer>

      <InputContainer>
        <Subtitle>Password</Subtitle>
        <IconInput
          icon={MdLock}
          type="password"
          value={password}
          onChange={updatePassword}
          placeholder="Password..."
          withBottomMargin
        />
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
