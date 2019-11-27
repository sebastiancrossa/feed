import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: white;
  padding: 1rem;

  z-index: 2;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  max-width: 97%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const Links = styled.ul`
  display: flex;

  list-style: none;
`;

export const HomeLink = styled(Link)`
  color: var(--color-text);
  font-size: 1.8rem;
  font-weight: 700;

  &:visited {
    color: var(--color-text);
  }
`;

export const SignOut = styled.button`
  background: none;
  background-color: var(--color-main);
  border-radius: 5px;
  border: none;

  height: 2.5rem;
  padding: 0 1rem;

  color: white;
  font-size: 0.9rem;
  font-weight: 700;

  cursor: pointer;
`;

export const SearchButton = styled.button`
  background: none;
  border-radius: 5px;
  border: 2px solid var(--color-main);

  height: 2.5rem;
  padding: 0 1rem;

  color: var(--color-main);
  font-size: 0.9rem;
  font-weight: 700;

  cursor: pointer;
`;
