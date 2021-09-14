import { useScreenType } from "../../shared/custom-hooks/useScreenType";

import { OverflowWrapper } from "../../shared/OverflowWrapper";
import { CategoryNav } from "../Nav/CategoryNav";
import { View } from "../../shared/View";
import { StickyNav } from "../StickyNav";

import { NavLink, useRouteMatch } from "react-router-dom";
import { MainNav } from "../Nav/MainNav";
import { CartBar } from "../Cart/CartBar";

import { Link } from "react-router-dom";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
import SpeakerOutlinedIcon from "@material-ui/icons/SpeakerOutlined";

export const ResponsiveLayout = ({ children, overflowY, cart = [] }) => {
  let layout = null;

  const match = useRouteMatch();
  console.log(match);

  const screenType = useScreenType();

  if (screenType === "sidebar") {
    if (match.path == "/shopping-cart") {
      layout = (
        <>
          <StickyNav cart={cart}>
            <MainNav>
              <li>
                <NavLink to="/shopping-cart">home</NavLink>
              </li>
              <li>
                <NavLink to="/shopping-cart/catalog">catalog</NavLink>
              </li>
            </MainNav>
            <CartBar cart={null} />
          </StickyNav>
          <OverflowWrapper overflowY="hidden">
            <CategoryNav />
            <View>{children}</View>
          </OverflowWrapper>
        </>
      );
      return layout;
    }

    layout = (
      <>
        <StickyNav cart={cart}>
          <MainNav>
            <li>
              <NavLink to="/shopping-cart">home</NavLink>
            </li>
            <li>
              <NavLink to="/shopping-cart/catalog">catalog</NavLink>
            </li>
          </MainNav>
          <CartBar cart={cart} />
        </StickyNav>
        <OverflowWrapper overflowY={overflowY}>
          <CategoryNav>
            <Link to="/shopping-cart/catalog/headphones">
              <li>
                <HeadsetOutlinedIcon />
              </li>
            </Link>
            <Link to="/shopping-cart/catalog/speakers">
              <li>
                <SpeakerOutlinedIcon />
              </li>
            </Link>
          </CategoryNav>
          <View>{children}</View>
        </OverflowWrapper>
      </>
    );
  }

  if (screenType === "bottombar") {
    if (match.path == "/shopping-cart") {
      layout = (
        <>
          <StickyNav cart={cart}>
            <MainNav>
              <li>
                <NavLink to="/shopping-cart">home</NavLink>
              </li>
              <li>
                <NavLink to="/shopping-cart/catalog">catalog</NavLink>
              </li>
            </MainNav>
            <CartBar cart={null} />
          </StickyNav>
          <OverflowWrapper overflowY="hidden">
            <View mobile>{children}</View>
          </OverflowWrapper>
          <CategoryNav bottombar />
        </>
      );
      return layout;
    }

    layout = (
      <>
        <StickyNav cart={cart}>
          <MainNav>
            <li>
              <NavLink to="/shopping-cart">home</NavLink>
            </li>
            <li>
              <NavLink to="/shopping-cart/catalog">catalog</NavLink>
            </li>
          </MainNav>
          <CartBar cart={cart} />
        </StickyNav>
        <OverflowWrapper overflowY={overflowY}>
          <View mobile>{children}</View>
        </OverflowWrapper>
        <CategoryNav bottombar>
          <Link to="/shopping-cart/catalog/headphones">
            <li>
              <HeadsetOutlinedIcon />
            </li>
          </Link>
          <Link to="/shopping-cart/catalog/speakers">
            <li>
              <SpeakerOutlinedIcon />
            </li>
          </Link>
        </CategoryNav>
      </>
    );
  }

  return layout;
};
