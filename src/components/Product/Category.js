import React from "react";
import { css } from "styled-components/macro";
import ProductCard from "./Card";
import { getProducts } from "../../assets/audio";
import { useParams } from "react-router-dom";

export default function ProductCategory() {
  const { category } = useParams();
  const products = getProducts(category);

  return (
    <div
      css={`
        display: grid;
        gap: 16px;
        padding: clamp(8px, 3vw, 16px);
        grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
        justify-content: center;
        position: relative;
        z-index: 2;
      `}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
