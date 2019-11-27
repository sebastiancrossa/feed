// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FaUserCircle } from "react-icons/fa";
import { FiCheck, FiX } from "react-icons/fi";

// Styles
import { Card, Follower, Request, Empty } from "./profileInfo.style";

export const ProfileInfo = () => {
  const [data, setData] = useState();
  const AppState = useContext(AppContext);

  const fetchData = () => {
    let filteredUserData;

    if (AppState.userList !== null) {
      filteredUserData = AppState.userList.filter(
        user => user.name == AppState.selectedUser
      );
    }

    setData(filteredUserData);
  };

  useEffect(() => {
    fetchData();
  }, [AppState]);

  const rejectRequest = name => {
    let filteredRequests;
    let filteredUser;

    if (AppState) {
      filteredRequests = data[0].requests.filter(request => request !== name);

      filteredUser = AppState.userList.filter(
        user => user.name === AppState.selectedUser
      );

      filteredUser[0].requests = filteredRequests;

      fetchData();
    }
  };

  const acceptRequest = name => {
    // Lo llamamos para que elimine el nombre en la lista de solicitudes del usuario seleciconado
    rejectRequest(name);

    let filteredUser = AppState.userList.filter(
      user => user.name === AppState.selectedUser
    );

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

      filteredUser = AppState.userList.filter(
        user => user.name === AppState.selectedUser
      );

      if (filteredUser[0].friends === undefined) {
        filteredUser.friends = [name];
      } else {
        filteredUser[0].friends.push(name);
        console.log("Added | ", AppState.filteredUser);
      }
    }
  };

  return (
    <Card>
      <div style={{ marginBottom: "1.3rem" }}>
        <FaUserCircle size={70} style={{ color: "var(--color-gray)" }} />
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          {data !== undefined ? data[0].name : "Loading..."}
        </p>
        <p>
          {data !== undefined
            ? data[0].friends !== undefined
              ? data[0].friends.length
              : "0"
            : "..."}{" "}
          {data !== undefined
            ? data[0].friends !== undefined
              ? data[0].friends === 1
                ? "friend"
                : "friends"
              : "friends"
            : "..."}
        </p>
      </div>

      <div style={{ marginBottom: "0.8rem" }}>
        <p style={{ textAlign: "left", marginBottom: "0.4rem" }}>Friends:</p>

        {data !== undefined ? (
          data[0].friends.length !== 0 ? (
            data[0].friends.map(friend => (
              <Follower>
                <FaUserCircle
                  size={30}
                  style={{
                    color: "var(--color-gray)",
                    marginRight: "1rem"
                  }}
                />
                <p>{friend}</p>
              </Follower>
            ))
          ) : (
            <Empty>No friends</Empty>
          )
        ) : (
          <Empty>Loading...</Empty>
        )}
      </div>

      <div>
        <p style={{ textAlign: "left", marginBottom: "0.4rem" }}>Requests:</p>

        {data !== undefined ? (
          data[0].requests.length !== 0 ? (
            data[0].requests.map(request => (
              <Request>
                <FaUserCircle
                  size={30}
                  style={{
                    color: "var(--color-gray)",
                    marginRight: "1rem"
                  }}
                />
                <p style={{ marginRight: "1.5rem" }}>{request}</p>

                <FiCheck
                  size={18}
                  onClick={() => acceptRequest(request)}
                  style={{
                    color: "green",
                    cursor: "pointer",
                    marginRight: "0.3rem"
                  }}
                />
                <FiX
                  size={18}
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => {
                    rejectRequest(request);
                  }}
                />
              </Request>
            ))
          ) : (
            <Empty>No requests</Empty>
          )
        ) : (
          <Empty>Loading...</Empty>
        )}
      </div>
    </Card>
  );
};
