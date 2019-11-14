// Libraries
import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Styles
import { Card, SelectButton } from "./userCard.style";

export const UserCard = ({ followers }) => {
  return (
    <Card>
      <FaUserCircle
        size={70}
        style={{ color: "var(--color-gray)", marginBottom: "0.5rem" }}
      />
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ fontSize: "1.2rem" }}>{followers}</p>
        <p style={{ textTransform: "uppercase", fontSize: "0.8rem" }}>
          Followers
        </p>
      </div>

      <SelectButton>SELECT</SelectButton>
    </Card>
  );
};
