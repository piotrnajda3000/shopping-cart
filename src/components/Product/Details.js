import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../assets/audio";
import { css } from "styled-components/macro";
import { CartContext } from "../Cart/withCart";
import useQuantity from "../hooks/useQuantity";
import { elevation } from "../../styles/mixins";
import SIcon from "../../styles/components/SIcon";
import { mdiCheck } from "@mdi/js";

import { NAV_HEIGHT } from "../Nav";
import { NEGATIVE_MARGIN, RELATIVE_PADDING } from "./Card";

const ProductDetails = () => {
  const [quantity, handleQuantityChange] = useQuantity(1, 1);

  const { cartAPI, dispatch } = useContext(CartContext);

  const { category, itemId } = useParams();
  const product = getProduct(category, itemId);
  const { title, singleUnitPrice, image, id } = product;

  const handleAddToCart = (e) => {
    const productInCart = cartAPI.getProduct(id);
    if (productInCart) {
      handleUpdateProductInCart(productInCart);
    } else {
      dispatch({ type: "ADD_TO_CART", product, quantity });
    }
  };

  const handleUpdateProductInCart = (productInCart) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      product: productInCart,
      quantity: parseInt(quantity, 10) + parseInt(productInCart.quantity, 10),
    });
  };

  return (
    <div
      css={`
        display: grid;
        gap: 8px;
        padding: 8px clamp(8px, 3vw, 16px);
        grid-template-columns: minmax(300px, 400px);
        grid-auto-rows: min-content;
        place-content: center;
        place-items: center;
        position: relative;
        z-index: 2;
        min-height: calc(100vh - ${NAV_HEIGHT}px);
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
        <div>{title}</div>
        <div>{singleUnitPrice}$</div>
        <img
          src={image}
          alt={title}
          css={`
            max-width: calc(100% + ${RELATIVE_PADDING} * 2);
            aspect-ratio: 4/5;
            object-fit: cover;
            border-radius: 10px;
            margin-left: ${NEGATIVE_MARGIN};
            margin-right: ${NEGATIVE_MARGIN};
            margin-bottom: ${NEGATIVE_MARGIN};
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
          onClick={handleAddToCart}
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
          <SIcon path={mdiCheck} $light size="18px" />
          <span
            css={`
              display: inline-block;
              margin: auto;
            `}
          >
            Add to cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
