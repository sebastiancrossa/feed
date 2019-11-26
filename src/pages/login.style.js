import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: center;

  margin-bottom: 0rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text);
  text-align: center;

  margin-bottom: 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  grid-column-gap: 1rem;
`;
