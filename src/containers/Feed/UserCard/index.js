// Libraries
import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Styles
import { Card, SelectButton } from "./userCard.style";

export const UserCard = ({ followers }) => {
  return (
    <Card>
      <FaUserCircle size={50} style={{ color: "var(--color-gray)" }} />
      <div style={{ marginBottom: "0.5rem" }}>
        <p style={{ fontSize: "1.2rem" }}>{followers}</p>
        <p style={{ textTransform: "uppercase", fontSize: "0.7rem" }}>
          Followers
        </p>
      </div>

      <SelectButton>SELECT</SelectButton>
    </Card>
  );
};
