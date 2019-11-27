// Libraries
import React, { useContext } from "react";
import { AppContext } from "../../../App";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

// Styles
import {
  Nav,
  Container,
  Links,
  HomeLink,
  SearchButton,
  SignOut
} from "./navbar.style";

export const Navbar = withRouter(({ history }) => {
  const AppState = useContext(AppContext);

  const signOut = async () => {
    if (AppState) {
      AppState.setSelectedUser("");
    }
  };

  return (
    <Nav>
      <Container>
        <HomeLink to="/">Feed</HomeLink>

        <Links>
          <li>
            <SearchButton onClick={() => history.push("/search")}>
              Search
            </SearchButton>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <SignOut
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </SignOut>
          </li>
        </Links>
      </Container>
    </Nav>
  );
});
