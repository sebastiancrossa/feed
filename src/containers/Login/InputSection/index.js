// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import useInputState from "../../../hooks/useInputState";
import { withRouter } from "react-router";

// Styles
import {
  Card,
  Heading,
  Subtitle,
  InputContainer,
  SignIn
} from "./inputSection.style";

const InputSection = ({ history }) => {
  const [username, updateUsername, resetUsername] = useInputState("");
  const [password, updatePassword, resetPassword] = useInputState("");

  const AppState = useContext(AppContext);

  const signIn = async () => {
    let filteredData;

    if (AppState) {
      filteredData = AppState.userList.filter(user => user.name === username);

      console.log(filteredData);

      if (
        filteredData[0].name === username &&
        filteredData[0].password === password
      ) {
        await AppState.setSelectedUser(username);
        history.push("/");
        console.log(true);
      }
    }
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Heading>Sign in</Heading>

      <InputContainer>
        <Subtitle>Username</Subtitle>
        <input type="text" value={username} onChange={updateUsername} />
      </InputContainer>

      <InputContainer>
        <Subtitle>Password</Subtitle>
        <input type="password" value={password} onChange={updatePassword} />
      </InputContainer>

      <SignIn
        onClick={() => {
          signIn();

          resetUsername();
          resetPassword();
        }}
      >
        Sign in
      </SignIn>
    </Card>
  );
};

export default withRouter(InputSection);
