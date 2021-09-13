import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { TopWrapper, MainNav, CategoryNav } from "../theme/Nav";
import { CartToggle } from "../theme/Cart";

const OverflowWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const View = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
`;

const Home = () => {
  return (
    <>
      <TopWrapper>
        <MainNav>
          <li>
            <NavLink to="/shopping-cart">home</NavLink>
          </li>
          <li>
            <NavLink to="/shopping-cart/catalog">catalog</NavLink>
          </li>
        </MainNav>
        <CartToggle></CartToggle>
      </TopWrapper>
      <OverflowWrapper>
        <CategoryNav></CategoryNav>
        <View></View>
      </OverflowWrapper>
    </>
  );
};

export default Home;
