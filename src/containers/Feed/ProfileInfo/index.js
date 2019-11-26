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
    console.log(filteredUserData);
  };

  useEffect(() => {
    fetchData();
  }, [AppState.userList]);

  return (
    <Card>
      <div style={{ marginBottom: "1.3rem" }}>
        <FaUserCircle size={70} style={{ color: "var(--color-gray)" }} />
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          {data !== undefined ? data[0].name : "Loading..."}
        </p>
        <p>{data !== undefined ? data[0].followers.length : "..."} followers</p>
      </div>

      <div>
        <p style={{ textAlign: "left", marginBottom: "0.4rem" }}>Followers:</p>

        {data !== undefined ? (
          data[0].followers.map(follower => (
            <Follower>
              <FaUserCircle
                size={30}
                style={{
                  color: "var(--color-gray)",
                  marginRight: "1rem"
                }}
              />
              <p>{follower}</p>
            </Follower>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </Card>
  );
};
