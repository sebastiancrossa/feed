// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FaUserCircle } from "react-icons/fa";
import { withRouter } from "react-router";

// Styles
import { Card, Grid, FollowButton, FollowingButton } from "./userCard.style";

export const UserCard = withRouter(({ history, name, friends }) => {
  const [followedByUser, setFollowedByUser] = useState();
  const AppState = useContext(AppContext);

  const checkFollow = () => {
    if (friends !== undefined) {
      console.log("Name: ", name, " Friends: ", friends);
      friends.map(follower => {
        if (follower === AppState.selectedUser) setFollowedByUser(true);
      });
    }
  };

  useEffect(() => {
    checkFollow();
  }, [AppState]);

  const followUser = async () => {
    let filteredUser;

    if (AppState) {
      AppState.userList.map(user => {
        if (user.name === name) {
          if (user.friends === undefined) {
            user.friends = [AppState.selectedUser];
          } else {
            user.friends.push(AppState.selectedUser);
          }
        }
      });

      filteredUser = await AppState.userList.filter(
        user => user.name === AppState.selectedUser
      );

      if (filteredUser[0].friends === undefined) {
        filteredUser.friends = [name];
      } else {
        filteredUser[0].friends.push(name);
        console.log("Added | ", AppState.filteredUser);
      }

      setFollowedByUser(true);
      history.push("/search");
    }
  };

  return (
    <Card>
      <Grid>
        <div>
          <FaUserCircle size={50} style={{ color: "var(--color-gray)" }} />
        </div>

        <div style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: "600"
            }}
          >
            {name}
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            {friends !== undefined ? friends.length : "0"}{" "}
            {friends !== undefined
              ? friends.length <= 1
                ? "friend"
                : "friends"
              : "friends"}
          </p>
        </div>
      </Grid>

      {followedByUser ? (
        <FollowingButton>
          <span>FRIENDS</span>
        </FollowingButton>
      ) : (
        <FollowButton onClick={() => followUser()}>ADD</FollowButton>
      )}
    </Card>
  );
});
