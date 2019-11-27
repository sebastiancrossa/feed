import styled from "styled-components";

export const Header = styled.h1`
  color: var(--color-text);
  text-align: center;

  margin: 5rem 0 1.5rem 0;
`;

export const InputCard = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;

  display: flex;

  padding: 1rem;
  margin-bottom: 1.5rem;

  -webkit-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  -moz-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem 3rem;
  border-radius: 5px;

  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  background-color: var(--color-main);
  color: white;
`;
