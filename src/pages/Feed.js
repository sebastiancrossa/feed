// Libraries
import React from "react";

// Styles
import { Grid } from "./feed.style";
import { UserList } from "../containers/Feed/UserList";
import { ProfileInfo } from "../containers/Feed/ProfileInfo";
import { UserPostInput } from "../containers/Feed/Posts/UserPostInput";

const Feed = () => {
  return (
    <div>
      <UserList />

      <Grid>
        <div>
          <ProfileInfo />
        </div>
        <div style={{ marginRight: "2rem" }}>
          <UserPostInput />
        </div>
      </Grid>
    </div>
  );
};

export default Feed;
