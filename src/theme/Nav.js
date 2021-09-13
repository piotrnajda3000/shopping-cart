import styled from "styled-components";

const TopWrapper = styled.div`
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

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background-color: ${(props) => `hsl(0, 0%, ${props.theme.grayscale[9]})`};
`;

const MainNav = styled(Nav)`
  width: 108px;
  padding: 2rem;
  gap: 0.5rem;
  line-height: 24px;

  a:hover {
    color: hsl(260, 60%, 65%);
  }
`;

const CategoryNav = styled(Nav)`
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
    color: hsl(260, 60%, 75%);
  }
`;

export { TopWrapper, Nav, MainNav, CategoryNav };
