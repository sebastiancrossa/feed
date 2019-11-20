import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--color-white);

  width: 15rem;
  height: 30rem;

  padding: 1.3rem;

  z-index: 1;
  text-align: center;

  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  -moz-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
  box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.59);
`;

export const Follower = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  padding: 0.5rem;
  border-radius: 5px;

  transition: 0.3s;

  &:hover {
    background-color: var(--color-gray-light);
  }
`;
