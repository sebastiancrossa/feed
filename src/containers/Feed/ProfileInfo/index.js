// Libraries
import React from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa";

// Styles
import { Card, Follower } from "./profileInfo.style";

export const ProfileInfo = () => {
  return (
    <Card>
      <div style={{ marginBottom: "1.3rem" }}>
        <FaUserCircle size={70} style={{ color: "var(--color-gray)" }} />
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>Sebastian</p>
        <p>6 followers</p>
      </div>

      <div>
        <p style={{ textAlign: "left", marginBottom: "0.4rem" }}>Followers:</p>

        <Follower>
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </Follower>

        <Follower>
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </Follower>
        <Follower>
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </Follower>
      </div>
    </Card>
  );
};
