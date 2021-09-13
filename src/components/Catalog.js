import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
import SpeakerOutlinedIcon from "@material-ui/icons/SpeakerOutlined";

import { TopWrapper, MainNav, CategoryNav } from "../theme/Nav";
import { CartToggle, CartAmount, CartLink } from "../theme/Cart";

import ProductPreview from "./Product/ProductPreview";
import ProductClicked from "./Product/ProductClicked";

import { useState } from "react";

const OverflowWrapper = styled.div`
  display: flex;
  overflow-y: scroll;
`;

const View = styled.div`
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
  flex: 1;
  min-height: calc(100vh - 108px);
  height: fit-content;
  padding: 2rem;
  display: grid;
  justify-content: center;
  background-color: hsl(0, 0%, ${(props) => props.theme.grayscale[8]});
`;

const Catalog = ({ products, cart, setCart }) => {
  const [productsInEditMode, setProductsInEditMode] = useState([]);

  const handleClick = (clickedProduct) => {
    const newProductInEditMode = { quantity: 1, ...clickedProduct };
    setProductsInEditMode([...productsInEditMode, newProductInEditMode]);
  };

  const handleQuantityChange = (e, product) => {
    setProductsInEditMode(
      productsInEditMode.map((p) => {
        if (p.id === product.id) {
          p = { ...product, quantity: +e.target.value };
        }
        return p;
      })
    );
  };

  const handleCancel = (productID) => {
    setProductsInEditMode(productsInEditMode.filter((p) => p.id !== productID));
  };

  const handleAddToCart = (product) => {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            cartItem.quantity += product.quantity;
          }
          return cartItem;
        })
      );
    } else {
      const productToAdd = productsInEditMode.find((p) => p.id === product.id);
      setCart([...cart, productToAdd]);
    }
    handleCancel(product.id);
  };

  const productBoxes = products.map((product) => {
    const clickedProduct = productsInEditMode.find((p) => product.id == p.id);
    if (clickedProduct) {
      return ProductClicked(
        clickedProduct,
        handleCancel,
        handleAddToCart,
        handleQuantityChange
      );
    } else {
      return ProductPreview(product, handleClick);
    }
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
        <View>{productBoxes}</View>
      </OverflowWrapper>
    </>
  );
};

export default Catalog;
