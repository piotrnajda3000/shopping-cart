import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { css } from "styled-components/macro";
import { createResource, wrapPromise } from "./utils";

const artworksResource = wrapPromise(fetchArtworks());

export default function Paintings() {
  const artworks = artworksResource.read();

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <motion.div initial="hidden" animate="show" variants={parent}>
          {artworks.map((artwork) => {
            const resource = wrapPromise(fetchImage(artwork.imageId));
            return (
              <motion.div key={artwork.id} variants={stat}>
                <Artwork artwork={artwork} resource={resource} />
              </motion.div>
            );
          })}
        </motion.div>
      </Suspense>
    </>
  );
}

const Artwork = ({ artwork, resource }) => {
  const image = resource.read();

  return (
    <div
      css={`
        max-width: 300px;
      `}
    >
      <p>{artwork.title}</p>
      <SuspenseImage
        src={image}
        css={`
          max-width: 300px;
        `}
      />
    </div>
  );
};

// Fetch functions

async function fetchArtworks() {
  const artworksIds = [27992, 27980, 27991, 27995];
  const promises = artworksIds.map((id) =>
    fetch(
      `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id`
    )
  );
  const responses = await Promise.all(promises);
  const jsonResponses = await Promise.all(responses.map((r) => r.json()));

  const artworks = jsonResponses.map((json) => ({
    imageId: json.data.image_id,
    title: json.data.title,
    id: json.data.id,
  }));

  return artworks;
}

const fetchImage = (imageId) => {
  return fetch(
    `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
  ).then((r) => r.url);
};

// Suspense image

const cache = new Map();

function SuspenseImage(props) {
  if (!props.src) return;
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

// Framer variants

const parent = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const stat = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
