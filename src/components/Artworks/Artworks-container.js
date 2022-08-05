import React from "react";
import { createResource } from "../suspense";
import Artworks from "./components/Artworks";
import Spinner from "../Spinner";
import { css } from "styled-components/macro";

export const cache = new Map();

function ArtworksContainer() {
  const fetchArtworks = async () => {
    const artworksIds = [27992, 27991, 27995, 27980];

    const promises = artworksIds.map((id) =>
      fetch(
        `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`
      )
    );
    const responses = await Promise.all(promises);

    const jsonResponses = await Promise.all(responses.map((r) => r.json()));

    const artworks = jsonResponses.map((json) => {
      return {
        imageUrl: `https://www.artic.edu/iiif/2/${json.data.image_id}/full/843,/0/default.jpg`,
        title: json.data.title,
        id: json.data.id,
      };
    });

    return artworks;
  };

  const artworksResource = createResource(fetchArtworks);

  return (
    <React.Suspense
      fallback={
        <Spinner
          css={`
            position: absolute;
            top: 50%;
            transform: translateY(50%);
          `}
        />
      }
    >
      <Artworks resource={artworksResource} />
    </React.Suspense>
  );
}

export default ArtworksContainer;
