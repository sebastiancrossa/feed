// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../App";

// Styles
import { Navbar } from "../layout/components/Navbar";
import { Grid } from "./feed.style";
import { UserList } from "../containers/Feed/UserList";
import { ProfileInfo } from "../containers/Feed/ProfileInfo";
import { UserPostInput } from "../containers/Feed/Posts/UserPostInput";
import { PostCard } from "../containers/Feed/Posts/PostCard";

const Feed = () => {
  const [posts, setPosts] = useState();
  const AppState = useContext(AppContext);

  const fetchPosts = () => {
    if (AppState !== undefined) {
      setPosts(AppState.postList);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [AppState]);

  return (
    <div>
      <Navbar />

      <Grid>
        <div>
          <ProfileInfo />
        </div>
        <div style={{ marginRight: "2rem" }}>
          <UserPostInput />

          {posts ? (
            posts.map(post => <PostCard user={post.name} text={post.text} />)
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default Feed;
