// Libraries
import React, { useState, useEffect, useContext } from "react";
import App, { AppContext } from "../../../App";
import { FaUserCircle, FaPlus } from "react-icons/fa";

// Styles
import {
  Card,
  NewUserCard,
  Grid,
  ButtonGrid,
  SelectButton,
  FollowButton,
  FollowingButton
} from "./userCard.style";

export const UserCard = ({ name, friends, newUser }) => {
  const [followedByUser, setFollowedByUser] = useState();
  const AppState = useContext(AppContext);

  useEffect(() => {
    if (friends !== undefined) {
      friends.map(follower => {
        if (follower === AppState.selectedUser) setFollowedByUser(true);
      });
    }
  }, [AppState]);

  const createUser = () => {
    const name = prompt("Name: ");

    AppState.setUserList([
      ...AppState.userList,
      {
        name: name,
        followers: []
      }
    ]);
  };

  const followUser = () => {
    if (AppState) {
      console.log("called");
      AppState.userList.map(user => {
        if (user.name === name) {
          if (user.friends === undefined) {
            user.friends = [AppState.selectedUser];
          } else {
            user.friends.push(AppState.selectedUser);
            console.log("added");
          }

          /*
          if (AppState.selectedUser.friends === undefined) {
            AppState.friends = [user.name];
          } else {
            AppState.friends.push(AppState.selectedUser);
            console.log("added");
          }
          */
        }
      });
    }
  };

  if (newUser) {
    return (
      <NewUserCard onClick={() => createUser()}>
        <FaPlus
          size={30}
          style={{
            color: "var(--color-gray)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
          }}
        />
      </NewUserCard>
    );
  } else {
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

        <ButtonGrid>
          <SelectButton
            onClick={async () => {
              if (AppState !== undefined) {
                await AppState.setSelectedUser(name);
                console.log(AppState.selectedUser);
              }
            }}
          >
            LOGIN
          </SelectButton>

          {followedByUser ? (
            <FollowingButton>
              <span>FRIENDS</span>
            </FollowingButton>
          ) : (
            <FollowButton onClick={() => followUser()}>ADD</FollowButton>
          )}
        </ButtonGrid>
      </Card>
    );
  }
};
