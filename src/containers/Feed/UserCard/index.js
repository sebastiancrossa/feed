// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FaUserCircle } from "react-icons/fa";
import { withRouter } from "react-router";

// Styles
import {
  Card,
  Grid,
  FollowButton,
  FollowingButton,
  RequestSentButton
} from "./userCard.style";

export const UserCard = withRouter(({ history, name, friends }) => {
  const [followedByUser, setFollowedByUser] = useState();
  const [requestSent, setRequestSent] = useState();

  const AppState = useContext(AppContext);

  const checkFollow = () => {
    if (friends !== undefined) {
      console.log("Name: ", name, " Friends: ", friends);
      friends.map(follower => {
        if (follower === AppState.selectedUser) setFollowedByUser(true);
      });
    }
  };

  const checkRequest = () => {
    let filteredUser;

    if (AppState) {
      filteredUser = AppState.userList.filter(user => user.name === name);

      filteredUser[0].requests.map(user => {
        if (user === AppState.selectedUser) setRequestSent(true);
      });
    }
  };

  useEffect(() => {
    checkFollow();
    checkRequest();
  }, [AppState]);

  const sendFriendRequest = () => {
    let filteredUser;

    if (AppState) {
      filteredUser = AppState.userList.filter(user => user.name === name);

      if (filteredUser[0].requests === undefined) {
        filteredUser[0].requests = [AppState.selectedUser];
      } else {
        filteredUser[0].requests.push(AppState.selectedUser);
      }

      console.log(filteredUser);
    }

    setRequestSent(true);
  };

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

  const unfriendUser = async () => {
    let filteredUser;

    if (AppState) {
      // Elimina el nombre del usuario actual de la lista de amigos del que picó
      AppState.userList.map(user => {
        if (user.name === name) {
          user.friends = user.friends.filter(
            friend => friend !== AppState.selectedUser
          );
          console.log("Eliminado: " + user.friends);
        }
      });

      // Elimina el nombre del usuario al que le picó de la lista de amigos del usuario actual
      filteredUser = await AppState.userList.filter(
        user => user.name === AppState.selectedUser
      );

      console.log(filteredUser[0]);

      filteredUser[0].friends = filteredUser[0].friends.filter(
        friend => friend !== name
      );
      console.log("Eliminado del actual : " + filteredUser[0].friends);

      setFollowedByUser(false);
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
        <FollowingButton onClick={() => unfriendUser()}>
          <span>FRIENDS</span>
        </FollowingButton>
      ) : requestSent ? (
        <RequestSentButton>SENT</RequestSentButton>
      ) : (
        <FollowButton onClick={() => sendFriendRequest()}>ADD</FollowButton>
      )}
    </Card>
  );
});
