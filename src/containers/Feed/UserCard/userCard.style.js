import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  background-color: var(--color-white);

  border-radius: 10px;
  padding: 1.3rem;
  margin-right: 2rem;

  text-align: center;

  width: 17rem;
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

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 0.5rem;
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

export const FollowButton = styled(SelectButton)`
  background-color: var(--color-secondary);
`;

export const FollowingButton = styled(FollowButton)`
  background: none;

  border: 3px solid var(--color-secondary);
  color: var(--color-secondary);

  &:hover span {
    display: none;
  }

  &:hover {
    border: 3px solid red;
    color: red;
  }

  &:hover:before {
    content: "UNFRIEND";
  }
`;

export const RequestSentButton = styled(SelectButton)`
  background: none;

  border: 3px solid #ff9ac1;
  color: #ff9ac1;
`;
