// Libraries
import React from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa";

// Styles
import { Card, NewUserCard, SelectButton } from "./userCard.style";

export const UserCard = ({ followers, newUser }) => {
  if (newUser) {
    return (
      <NewUserCard>
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
  }
};
