// Libraries
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../App";
import { FaUserCircle } from "react-icons/fa";

// Styles
import { Card, Follower } from "./profileInfo.style";

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

      <div>
        <p style={{ textAlign: "left", marginBottom: "0.4rem" }}>Friends:</p>

        {data !== undefined ? (
          data[0].friends !== undefined ? (
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
            <h1>No friends</h1>
          )
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Card>
  );
};
