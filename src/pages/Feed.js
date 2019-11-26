// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

// Styles
import { Grid } from "./feed.style";
import { UserList } from "../containers/Feed/UserList";
import { ProfileInfo } from "../containers/Feed/ProfileInfo";
import { UserPostInput } from "../containers/Feed/Posts/UserPostInput";
import { PostCard } from "../containers/Feed/Posts/PostCard";

const Feed = () => {
  const AppState = useContext(AppContext);

  return (
    <div>
      <UserList />

      <Grid>
        <div>
          <ProfileInfo />
        </div>
        <div style={{ marginRight: "2rem" }}>
          <UserPostInput />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </Grid>
    </div>
  );
};

export default Feed;
