import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background-color: var(--color-white);

  border-radius: 10px;
  padding: 1rem;
  margin-right: 2rem;

  text-align: center;

  width: 11rem;
  height: 12rem;

  -webkit-box-shadow: 0px 0px 96px 9px rgba(175,180,209,0.59);
-moz-box-shadow: 0px 0px 96px 9px rgba(175,180,209,0.59);
box-shadow: 0px 0px 96px 9px rgba(175,180,209,0.59);
Copy Text
`;

export const SelectButton = styled.button`
  width: 100%;
  padding: 1rem;

  vertical-align: bottom;

  font-size: 0.8rem;
  font-weight: 600;

  text-transform: uppercase;

  outline: none;
  border-radius: 5px;
  border: none;

  cursor: pointer;

  color: white;
  background-color: var(--color-main);
`;
