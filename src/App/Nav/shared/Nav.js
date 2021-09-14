import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 108px;
  background-color: ${(props) => `hsl(0, 0%, ${props.theme.grayscale[9]})`};
  position: sticky;
  top: 0;
  &:hover {
    position: relative;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background-color: ${(props) => `hsl(0, 0%, ${props.theme.grayscale[9]})`};
`;
