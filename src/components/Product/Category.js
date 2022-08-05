import React from "react";
import { css } from "styled-components/macro";
import ProductCard from "./Card";
import { getProducts } from "../../assets/audio";
import { useParams } from "react-router-dom";

import { NAV_HEIGHT } from "../Nav";

export default function ProductCategory() {
  const { category } = useParams();
  const products = getProducts(category);
  return (
    <div
      css={`
        display: grid;
        gap: 16px;
        padding: clamp(8px, 3vw, 16px);
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
        align-content: center;
        position: relative;
        z-index: 2;
        min-height: calc(100vh - ${NAV_HEIGHT}px);
      `}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
