import React from "react";
import { css } from "styled-components/macro";
import ProductCard from "./Card";
import { getProducts } from "../../assets/audio";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

import { NAV_HEIGHT } from "../Nav";

export default function ProductCategory({ category, fill = true }) {
  const { category: categoryParam } = useParams();

  const query = useQuery(["products", category || categoryParam], () =>
    getProducts(category || categoryParam)
  );

  if (query.isLoading) {
    return (
      <Spinner
        css={`
          position: absolute;
          top: 50%;
          transform: translateY(50%);
        `}
      />
    );
  }

  return (
    <div
      css={`
        display: grid;
        gap: 16px;
        padding: clamp(8px, 3vw, 16px);
        ${!fill && "padding-inline: 0px;"}
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
        align-content: center;
        position: relative;
        z-index: 2;
        ${fill ? `min-height: calc(100vh - ${NAV_HEIGHT}px)` : null};
      `}
    >
      {query.data.products.map((product) => (
        <ProductCard key={product.id} product={product} category={category} />
      ))}
    </div>
  );
}
