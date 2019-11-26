// Libraries
import React from "react";
import { FaUserCircle } from "react-icons/fa";

// Styles
import { Card, Grid } from "./postCard.style";

export const PostCard = () => {
  return (
    <Card>
      <Grid>
        <div style={{ justifySelf: "center" }}>
          <FaUserCircle size={40} style={{ color: "var(--color-gray)" }} />
        </div>
        <div>
          <p style={{ fontWeight: "700" }}>Sebastian Crossa</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            enim animi ipsa sapiente alias inventore recusandae nostrum
            perferendis minima deleniti id repellat quisquam magnam, iure ullam
            dolorem harum quidem aspernatur?
          </p>
        </div>
      </Grid>
    </Card>
  );
};
