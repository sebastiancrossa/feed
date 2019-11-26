// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";

// Styles
import { UserCard } from "../UserCard";
import { List } from "./userList.style";

export const UserList = () => {
  const [data, setData] = useState();
  const AppState = useContext(AppContext);

  const fetchData = () => {
    let filteredUserData;

    if (AppState.userList !== null) {
      filteredUserData = AppState.userList.filter(
        user => user.name !== AppState.selectedUser
      );
    }

    setData(filteredUserData);
    console.log(filteredUserData);
  };

  useEffect(() => {
    fetchData();
  }, [AppState]);

  return (
    <List>
      {data !== undefined ? (
        data.map(user => (
          <UserCard name={user.name} followers={user.followers.length} />
        ))
      ) : (
        <h1>Loading...</h1>
      )}

      <UserCard newUser />
    </List>
  );
};
