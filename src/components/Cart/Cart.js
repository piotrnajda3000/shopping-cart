import React, { useContext, useEffect } from "react";
import { css } from "styled-components/macro";
import { CartContext } from "./withCart";
import { elevation } from "../../styles/mixins";

import useQuantity from "../hooks/useQuantity";
import { mdiCartRemove } from "@mdi/js";

import SIcon from "../../styles/components/SIcon";

import { NAV_HEIGHT } from "../Nav";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div
      css={`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
        align-items: center;
        justify-content: center;
        gap: 16px;
        padding: clamp(8px, 3vw, 16px);
        min-height: calc(100vh - ${NAV_HEIGHT}px);
      `}
    >
      {cart.map((product) => (
        <ProductInCart key={product.id} product={product} />
      ))}
    </div>
  );
}

const ProductInCart = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const [quantity, handleQuantityChange] = useQuantity(1, product.quantity);

  useEffect(() => {
    handleUpdateProduct(product);
  }, [quantity]);

  const handleUpdateProduct = (product) => {
    dispatch({ type: "UPDATE_QUANTITY", product, quantity });
  };

  return (
    <div
      css={`
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <div
        css={`
          max-width: 300px;
          padding: clamp(8px, 3vw, 16px);
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          ${elevation("light")};
          background: white;
        `}
      >
        <div>{product.title}</div>
        <div>{Math.round(quantity * product.singleUnitPrice * 100) / 100}$</div>
        <img
          src={product.image}
          css={`
            flex: 1;
            aspect-ratio: 4 / 5;
            object-fit: cover;
            border-radius: 10px;
            margin-left: clamp(-16px, -3vw, -8px);
            margin-right: clamp(-16px, -3vw, -8px);
            margin-bottom: clamp(-16px, -3vw, -8px);
          `}
        />
      </div>
      <div
        css={`
          display: flex;
          gap: 10px;
          max-width: 300px;
          width: 100%;
        `}
      >
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          id="quantity"
          css={`
            width: 44px;
            text-align: center;
            border: 1px solid hsl(272, 50%, 67%);
            border-radius: 4px;
          `}
        ></input>
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: product.id })}
          css={`
            background-color: ${(p) => p.theme.colors.primary};
            border: 0;
            border-radius: 4px;
            padding-inline: 16px;
            padding-block: 8px;
            color: white;
            cursor: pointer;
            flex: 1;
            display: flex;
          `}
        >
          <SIcon path={mdiCartRemove} $light size="18px" />
          <span
            css={`
              display: inline-block;
              margin: auto;
            `}
          >
            Remove from cart
          </span>
        </button>
      </div>
    </div>
  );
};
