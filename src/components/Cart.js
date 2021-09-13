import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
import SpeakerOutlinedIcon from "@material-ui/icons/SpeakerOutlined";

import { TopWrapper, MainNav, CategoryNav } from "../theme/Nav";
import { CartToggle, CartAmount, CartLink } from "../theme/Cart";

import ProductInCart from "./Product/ProductInCart";

const OverflowWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const View = styled.div`
  overflow-y: auto;
  height: calc(100vh - 108px);

  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
  justify-content: center;

  /* flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; */
  padding: 2rem;
  background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
`;

const Catalog = ({ cart, setCart }) => {
  const handleQuantityChange = (e, product) => {
    setCart(
      cart.map((p) => {
        if (p.id === product.id) {
          p = { ...product, quantity: +e.target.value };
        }
        return p;
      })
    );
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((cartItem) => cartItem.id !== product.id));
  };

  const productsInCart = cart.map((product) => {
    return ProductInCart(product, handleQuantityChange, handleRemoveFromCart);
  });

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
        <CartLink to="/shopping-cart/cart">
          <CartToggle>
            <p>
              cart{" "}
              <CartAmount>
                {" "}
                {cart.reduce((total, current) => {
                  return (total += current.quantity);
                }, 0)}
              </CartAmount>
            </p>
            <ExpandMoreTwoToneIcon />
          </CartToggle>
        </CartLink>
      </TopWrapper>
      <OverflowWrapper>
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
        <View>{productsInCart}</View>
      </OverflowWrapper>
    </>
  );
};

export default Catalog;
