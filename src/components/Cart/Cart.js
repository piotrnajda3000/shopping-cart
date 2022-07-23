import produce from "immer";
import React, { useContext, useEffect } from "react";
import { css } from "styled-components/macro";
import Spacer from "../../styles/components/Spacer";
import { CartContext } from "./withCart";

import useQuantity from "../hooks/useQuantity";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Spacer size="16" />
      <div
        css={`
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        `}
      >
        {cart.map((product) => (
          <ProductInCart key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

const ProductInCart = ({ product }) => {
  const { cartAPI, cart, dispatch } = useContext(CartContext);

  const [quantity, handleQuantityChange] = useQuantity(1, product.quantity);

  useEffect(() => {
    handleUpdateProduct(product);
  }, [quantity]);

  const handleUpdateProduct = (product) => {
    dispatch({ type: "UPDATE_QUANTITY", product, quantity });

    // const updatedProduct = produce(product, (draft) => {
    //   draft.quantity = quantity;
    // });

    // setCart(
    //   produce((draft) => {
    //     draft[cartAPI.getProductIdx(product)] = updatedProduct;
    //   })
    // );
  };

  return (
    <div
      key={product.id}
      css={`
        display: flex;
        gap: 4px;
        flex-direction: column;
        max-width: fit-content;
      `}
    >
      <div>{product.title}</div>
      <div>{product.singleUnitPrice}$</div>
      <img
        src={product.image}
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
        <button>Remove from cart</button>
      </div>
      <div>Total: {quantity * product.singleUnitPrice}</div>
    </div>
  );
};
