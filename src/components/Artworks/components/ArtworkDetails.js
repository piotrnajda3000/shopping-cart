import React, { useEffect, useState } from "react";

import { createResource } from "../../suspense";

import { cache } from "../Artworks-container";
import { useParams, useLocation } from "react-router-dom";

import { css } from "styled-components/macro";
import { RELATIVE_PADDING } from "../../Product/Card";
import { NEGATIVE_MARGIN } from "../../Product/Card";

import { elevation } from "../../../styles/mixins";
import { fetchArtworks } from "../Artworks-container";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "../../Spinner";

const ArtworkDetails = () => {
  const { id } = useParams();

  const location = useLocation();

  const [finalArtwork, setFinalArtwork] = useState(location.state?.artwork);

  useEffect(() => {
    if (!location.state?.artwork) {
      fetchArtworks([id]).then((res) => {
        setFinalArtwork(res[0]);
      });
    }
  }, [location.state?.artwork, id]);

  if (finalArtwork) {
    return (
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: ${RELATIVE_PADDING};
          padding: ${RELATIVE_PADDING};
          margin-bottom: 16px;
          background: white;
          border-radius: 10px;
          ${elevation("light")};
          margin-top: 16px;
          max-width: clamp(285px, 75%, 720px);
          margin-inline: auto;
        `}
      >
        <p>{finalArtwork.title}</p>
        <ErrorBoundary
          fallback={<>Sorry! There was an issue loading this image</>}
        >
          <SuspenseImage
            alt={finalArtwork.title}
            src={finalArtwork.imageUrl}
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
    );
  } else {
    <Spinner
      css={`
        position: absolute;
        top: 50%;
        transform: translateY(50%);
      `}
    />;
  }
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

export default ArtworkDetails;
