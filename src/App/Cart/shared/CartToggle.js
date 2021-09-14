import styled from "styled-components";

export const CartToggle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  gap: 0.5rem;

  &:hover {
    color: white;
  }

  &:hover span {
    background: hsl(260, 60%, 55%);
    border-color: hsl(260, 60%, 55%);
  }

  & p {
    display: flex;
    gap: 0.5rem;
    margin: 0;
    line-height: 24px;
  }
`;
