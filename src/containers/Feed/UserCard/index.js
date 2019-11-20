// Libraries
import React from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa";

// Styles
import { Card, NewUserCard, Grid, SelectButton } from "./userCard.style";

export const UserCard = ({ name, followers, newUser }) => {
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
            <p style={{ fontSize: "0.9rem" }}>{followers} followers</p>
          </div>
        </Grid>
        <SelectButton>SELECT</SelectButton>
      </Card>
    );
  }
};
