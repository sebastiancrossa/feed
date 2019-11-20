// Libraries
import React from "react";

// Styles
import { UserCard } from "../UserCard";
import { List } from "./userList.style";

export const UserList = () => {
  return (
    <List>
      <UserCard name="Sebastian" followers={3} />
      <UserCard name="Daniel" followers={2} />
      <UserCard name="Jonathan" followers={6} />
      <UserCard newUser />
    </List>
  );
};
