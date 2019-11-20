// Libraries
import React from "react";

// Styles
import { UserCard } from "../UserCard";
import { List } from "./userList.style";

export const UserList = () => {
  return (
    <List>
      <UserCard followers={3} />
      <UserCard followers={2} />
      <UserCard followers={6} />
    </List>
  );
};
