// Libraries
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { Nav, Container } from "./navbar.style";

export const Navbar = () => {
  return (
    <Nav>
      <Container>
        <h1>Feed</h1>

        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </Container>
    </Nav>
  );
};
