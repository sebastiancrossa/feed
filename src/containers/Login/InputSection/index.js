// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import useInputState from "../../../hooks/useInputState";
import { withRouter } from "react-router";

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
    <div>
      <p>Username:</p>
      <input type="text" value={username} onChange={updateUsername} />
      <p>Password:</p>
      <input type="password" value={password} onChange={updatePassword} />
      <button
        onClick={() => {
          signIn();

          resetUsername();
          resetPassword();
        }}
      >
        Sign in
      </button>
    </div>
  );
};

export default withRouter(InputSection);
