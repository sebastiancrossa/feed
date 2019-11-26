import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;

  outline: none;
  border: none;

  background: white;
  color: var(--color-text);

  &::placeholder {
    color: var(--color-gray);
    font-weight: 500;
  }
`;

export const OuterContainer = styled.div`
  display: flex;

  margin-bottom: ${({ withBottomMargin }) =>
    withBottomMargin ? "2rem" : "1rem"};
  padding: 1rem;
  font-size: 0.8rem;
  font-weight: 500;

  width: 100%;
  height: 3.4rem;

  background: white;
  border-radius: 5px;
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;

  margin: 0.2rem 0.5rem 0 0;
`;
