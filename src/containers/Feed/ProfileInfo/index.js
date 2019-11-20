// Libraries
import React from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa";

// Styles
import { Card } from "./profileInfo.style";

export const ProfileInfo = () => {
  return (
    <Card>
      <div style={{ marginBottom: "1.3rem" }}>
        <FaUserCircle size={70} style={{ color: "var(--color-gray)" }} />
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>Sebastian</p>
        <p>6 followers</p>
      </div>

      <div>
        <p style={{ textAlign: "left", marginBottom: "0.8rem" }}>Followers:</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.8rem"
          }}
        >
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.8rem"
          }}
        >
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.8rem"
          }}
        >
          <FaUserCircle
            size={30}
            style={{
              color: "var(--color-gray)",
              marginRight: "1rem"
            }}
          />
          <p>Jonathan</p>
        </div>
      </div>
    </Card>
  );
};
