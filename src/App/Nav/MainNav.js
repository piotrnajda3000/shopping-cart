import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { Nav } from "./Nav.styled";

export const MainNav = function ({ children }) {
  return (
    <StyledMainNav>
      <li>
        <NavLink to="/shopping-cart">home</NavLink>
      </li>
      <li>
        <NavLink to="/shopping-cart/catalog">catalog</NavLink>
      </li>
    </StyledMainNav>
  );
};

const StyledMainNav = styled(Nav)`
  width: 108px;
  padding: 2rem;
  gap: 0.5rem;
  line-height: 24px;

  a:hover {
    color: hsl(260, 60%, 65%);
  }
`;
