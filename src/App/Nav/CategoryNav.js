import styled, { css } from "styled-components";

import { Nav } from "./Nav.styled";

export const CategoryNav = ({ bottombar, children }) => {
  return (
    <StyledCategoryNav bottombar={bottombar ? bottombar : undefined}>
      {children}
    </StyledCategoryNav>
  );
};

const StyledCategoryNav = styled(Nav)`
  position: sticky;
  top: 0;
  align-items: center;
  width: 108px;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0;
    width: 100%;
  }

  & a:hover {
    background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
    color: hsl(260, 80%, 75%);
  }

  ${({ bottombar }) =>
    bottombar &&
    css`
      width: 100%;
      flex-direction: row;
      height: 108px;

      & a {
        height: 100%;
      }
    `}
`;
