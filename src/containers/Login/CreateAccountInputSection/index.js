// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { withRouter } from "react-router";
import useInputState from "../../../hooks/useInputState";

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
    <div>
      <h1>Create Account</h1>
      <p>Username:</p>
      <input type="text" value={username} onChange={updateUsername} />
      <p>Password:</p>
      <input type="password" value={password} onChange={updatePassword} />
      <button
        onClick={() => {
          createAccount();

          resetUsername();
          resetPassword();
        }}
      >
        Create account
      </button>
    </div>
  );
};

export default withRouter(CreateAccountInputSection);
