// Libraries
import React from "react";

// Styles
import { UserList } from "../containers/Feed/UserList";
import { ProfileInfo } from "../containers/Feed/ProfileInfo";

const Feed = () => {
  return (
    <div>
      <UserList />
      <ProfileInfo />
    </div>
  );
};

export default Feed;
