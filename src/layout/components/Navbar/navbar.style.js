import styled from "styled-components";

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
  list-style: none;
`;

export const SignOut = styled.button`
  background: none;
  background-color: var(--color-main);
  border-radius: 5px;
  border: none;

  height: 2.5rem;
  padding: 0 1rem;

  color: white;
  font-weight: 700;

  cursor: pointer;
`;
