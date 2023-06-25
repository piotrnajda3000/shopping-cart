import React, { useEffect, useState } from "react";
import { useCreateResource } from "../suspense";
import Artworks from "./components/Artworks";
import Spinner from "../Spinner";
import { css } from "styled-components/macro";
import SIcon from "../../styles/components/SIcon";
import { mdiLoading, mdiReload } from "@mdi/js";

export const cache = new Map();

export const fetchArtworks = async (ids) => {
  const promises = ids.map((id) =>
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

export const fetchArtworksPage = async (page) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=5`
  );
  const json = await response.json();
  const artworks = json.data.map((artwork) => {
    return {
      imageUrl: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
      title: artwork.title,
      id: artwork.id,
    };
  });
  return artworks;
};

function ArtworksContainer({ fill, showMore = true }) {
  const [artworksPage, setArtworksPage] = useState(
    Math.floor(Math.random() * 20)
  );

  const artworksResource = useCreateResource(
    () => fetchArtworksPage(artworksPage),
    artworksPage
  );

  return (
    <>
      {showMore && (
        <button
          css={`
            margin-top: 16px;
            margin-left: 16px;
            padding: 4px 16px;
            display: inline-flex;
            background: white;
            border: 1px solid hsl(330, 72%, 54%);
            border-radius: 10px;
            gap: 4px;
          `}
          disabled={artworksResource.status === "pending"}
          onClick={() => setArtworksPage(Math.floor(Math.random() * 75))}
        >
          <SIcon
            path={
              artworksResource.status === "pending" ? mdiLoading : mdiReload
            }
            spin={artworksResource.status === "pending"}
            $dark
            size="18px"
          />
          See more
        </button>
      )}
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
        <Artworks resource={artworksResource} fill={fill} />
      </React.Suspense>
    </>
  );
}

export default ArtworksContainer;
