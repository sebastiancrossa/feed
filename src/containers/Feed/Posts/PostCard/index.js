// Libraries
import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Styles
import { Card, Grid } from "./postCard.style";

export const PostCard = ({ user, text }) => {
  return (
    <Card>
      <Grid>
        <div style={{ justifySelf: "center" }}>
          <FaUserCircle size={40} style={{ color: "var(--color-gray)" }} />
        </div>
        <div>
          <p style={{ fontWeight: "700" }}>{user}</p>
          <p>{text}</p>
        </div>
      </Grid>
    </Card>
  );
};
