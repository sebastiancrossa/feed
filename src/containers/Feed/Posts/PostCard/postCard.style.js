import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;

  padding: 1.3rem;
  margin-bottom: 1.5rem;

  -webkit-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.3);
  -moz-box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.3);
  box-shadow: 0px 0px 96px 9px rgba(175, 180, 209, 0.3);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-column-gap: 1rem;
`;
