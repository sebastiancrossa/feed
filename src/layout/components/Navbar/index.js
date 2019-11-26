// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

// Styles
import { Nav, Container, SignOut } from "./navbar.style";

export const Navbar = () => {
  const AppState = useContext(AppContext);

  const signOut = async () => {
    if (AppState) {
      AppState.setSelectedUser("");
    }
  };

  return (
    <Nav>
      <Container>
        <h1>Feed</h1>

        <ul style={{ listStyle: "none" }}>
          <li>
            <SignOut
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </SignOut>
          </li>
        </ul>
      </Container>
    </Nav>
  );
};
