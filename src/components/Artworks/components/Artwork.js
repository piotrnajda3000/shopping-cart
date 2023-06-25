import React from "react";

import { createResource } from "../../suspense";

import { cache } from "../Artworks-container";
import { Link } from "react-router-dom";

import { css } from "styled-components/macro";
import { RELATIVE_PADDING } from "../../Product/Card";
import { NEGATIVE_MARGIN } from "../../Product/Card";
import { elevation } from "../../../styles/mixins";
import { ErrorBoundary } from "react-error-boundary";

const Artwork = ({ artwork }) => {
  return (
    <Link
      to={{
        pathname: `/artworks/${artwork.id}`,
      }}
      state={{ artwork }}
    >
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: ${RELATIVE_PADDING};
          padding: ${RELATIVE_PADDING};
          background: white;
          border-radius: 10px;
          ${elevation("light")};
        `}
      >
        <p>{artwork.title}</p>
        <ErrorBoundary
          fallback={<>Sorry! There was an issue loading this image</>}
        >
          <SuspenseImage
            alt={artwork.title}
            src={artwork.imageUrl}
            css={`
              margin-left: ${NEGATIVE_MARGIN};
              margin-right: ${NEGATIVE_MARGIN};
              margin-bottom: ${NEGATIVE_MARGIN};
              object-fit: cover;
              border-radius: 0 0 10px 10px;
            `}
          />
        </ErrorBoundary>
      </div>
    </Link>
  );
};

function SuspenseImage(props) {
  loadImage(props.src).read();
  return <img {...props} />;
}

function loadImage(source) {
  let resource = cache.get(source);
  if (resource) return resource;

  resource = createResource(
    () =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = source;
        img.addEventListener("load", () => resolve(source));
        img.addEventListener("error", () =>
          reject(new Error(`Failed to load image ${source}`))
        );
      })
  );

  cache.set(source, resource);
  return resource;
}

export default Artwork;
