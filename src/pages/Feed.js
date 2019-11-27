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
    let filteredPosts;
    let filteredUser;

    if (AppState !== undefined) {
      filteredUser = AppState.userList.filter(
        user => user.name === AppState.selectedUser
      );

      if (filteredUser[0].friends !== undefined) {
        filteredPosts = AppState.postList.filter(
          post =>
            filteredUser[0].friends.includes(post.name) ||
            post.name === AppState.selectedUser
        );
      } else {
        filteredPosts = AppState.postList.filter(
          post => post.name === AppState.selectedUser
        );
      }

      setPosts(filteredPosts);
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
            posts.length > 0 ? (
              posts.map(post => <PostCard user={post.name} text={post.text} />)
            ) : (
              <h1 style={{ color: "var(--color-gray)" }}>
                Make new friends so you can see their posts here :)
              </h1>
            )
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </Grid>
    </div>
  );
};

export default Feed;
