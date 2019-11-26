import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--color-main);
  height: 100%;

  padding: 2rem;

  color: white;
  border-radius: 8px;
`;

export const Heading = styled.h1`
  margin-bottom: 1.3rem;
`;

export const Subtitle = styled.p`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  margin-bottom: 0.8rem;
`;

export const SignIn = styled.button`
  display: block;

  padding: 1rem 2.5rem;
  border: none;
  border-radius: 5px;

  font-size: 0.8rem;

  background-color: var(--color-main-dark);
  color: white;

  width: 11rem;
`;
