import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background-color: var(--color-white);

  border-radius: 10px;
  padding: 1.2rem;
  margin-right: 2rem;

  text-align: center;

  width: 15rem;
  height: 10rem;

  -webkit-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  -moz-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
`;

export const NewUserCard = styled.div`
  width: 13rem;
  height: 10rem;

  position: relative;

  cursor: pointer;

  padding: 1rem;
  text-align: center;

  border: 3.5px dashed var(--color-gray);
  border-radius: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  margin-bottom: 1rem;

  align-items: center;
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
