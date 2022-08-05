import React, { useContext, useEffect } from "react";
import { css } from "styled-components/macro";
import { CartContext } from "./withCart";
import { elevation } from "../../styles/mixins";

import useQuantity from "../hooks/useQuantity";
import { mdiCartRemove } from "@mdi/js";

import SIcon from "../../styles/components/SIcon";

import { NAV_HEIGHT } from "../Nav";
import { NEGATIVE_MARGIN, RELATIVE_PADDING } from "../Product/Card";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div
      css={`
        display: grid;
        gap: ${RELATIVE_PADDING};
        padding: ${RELATIVE_PADDING};
        grid-template-columns: repeat(auto-fit, 300px);
        place-content: center;
        place-items: center;
        position: relative;
        z-index: 2;
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
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: fit-content;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: ${RELATIVE_PADDING};
          border-radius: 10px;
          ${elevation("light")};
          background: white;
        `}
      >
        <div>{product.title}</div>
        <div>{Math.round(quantity * product.singleUnitPrice * 100) / 100}$</div>
        <img
          src={product.image}
          css={`
            max-width: calc(100% + ${RELATIVE_PADDING} * 2);
            aspect-ratio: 4 / 5;
            object-fit: cover;
            border-radius: 10px;
            margin-inline: ${NEGATIVE_MARGIN};
            margin-bottom: ${NEGATIVE_MARGIN};
          `}
        />
      </div>
      <div
        css={`
          display: flex;
          gap: ${RELATIVE_PADDING};
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
