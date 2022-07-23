import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../assets/audio";
import { css } from "styled-components/macro";
import { CartContext } from "../Cart/withCart";
import produce from "immer";
import useQuantity from "../hooks/useQuantity";

export default function ProductDetails() {
  const { cartAPI, cart, dispatch } = useContext(CartContext);

  const { category, itemId } = useParams();
  const product = getProduct(category, itemId);

  const { title, singleUnitPrice, image, id } = product;

  const [quantity, handleQuantityChange] = useQuantity(0, 1);

  const handleAddToCart = (e) => {
    const productInCart = cartAPI.getProduct(id);
    if (productInCart) {
      handleUpdateProductInCart(productInCart);
      return;
    }

    dispatch({ type: "ADD_TO_CART", product, quantity });

    // setCart([
    //   ...cart,
    //   {
    //     ...product,
    //     quantity,
    //   },
    // ]);
  };

  const handleUpdateProductInCart = (productInCart) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      product: productInCart,
      quantity: quantity + productInCart.quantity,
    });

    // const updatedProductInCart = produce(productInCart, (draft) => {
    //   draft.quantity = quantity + productInCart.quantity;
    // });

    // setCart(
    //   produce((draft) => {
    //     draft[cartAPI.getProductIdx(productInCart)] = updatedProductInCart;
    //   })
    // );
  };

  return (
    <>
      <div
        css={`
          display: flex;
          gap: 4px;
          flex-direction: column;
          max-width: fit-content;
        `}
      >
        <div>{title}</div>
        <div>{singleUnitPrice}$</div>
        <img
          src={image}
          css={`
            width: 300px;
            height: 300px;
            object-fit: cover;
            border: 1px solid black;
          `}
        />
        <div
          css={`
            display: flex;
            gap: 4px;
          `}
        >
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="5"
            id="quantity"
            css={`
              width: 44px;
            `}
          ></input>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </>
  );
}
