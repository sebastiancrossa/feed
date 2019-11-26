// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";

// Styles
import { Nav, Container } from "./navbar.style";

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

        <ul>
          <li>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          </li>
        </ul>
      </Container>
    </Nav>
  );
};
