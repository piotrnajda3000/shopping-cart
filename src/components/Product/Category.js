import React from "react";
import { css } from "styled-components/macro";
import ProductCard from "./Card";
import { getProducts } from "../../assets/audio";
import { useParams, Link } from "react-router-dom";

export default function ProductCategory() {
  const { category } = useParams();

  const products = getProducts(category);

  return (
    <div
      css={`
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
      `}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
