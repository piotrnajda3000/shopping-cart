import styled from "styled-components";
import { Link } from "react-router-dom";

const CartLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

const CartToggle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
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

const CartAmount = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 24px;
  width: 24px;
  border: 1px solid hsl(0, 0%, 85%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export { CartToggle, CartLink, CartAmount };
