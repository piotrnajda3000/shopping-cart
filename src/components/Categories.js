import { categories } from "../components/Nav/categories";
import ProductCategory from "./Product/Category";
import { css } from "styled-components/macro";
import Artworks from "../components/Artworks";
import { useState } from "react";
import SIcon from "../styles/components/SIcon";
import { mdiReload } from "@mdi/js";

export default function Categories() {
  const [artworksPage, setArtworksPage] = useState(
    Math.floor(Math.random() * 20)
  );

  return (
    <div css={``}>
      {categories.map((category) => {
        return category.links.map((link) => {
          return (
            <div
              key={link.text}
              css={`
                padding: 2rem;
              `}
            >
              {link.text !== "Artworks" && (
                <>
                  <h2>{link.text}</h2>
                  <ProductCategory
                    category={link.text.toLowerCase()}
                    key={link.text}
                    fill={false}
                  />
                </>
              )}
            </div>
          );
        });
      })}
    </div>
  );
}
