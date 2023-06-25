import React, { useEffect, useState } from "react";
import Artwork from "./Artwork";
import { motion } from "framer-motion";
import { css } from "styled-components/macro";
import Masonry from "react-masonry-css";
import styled from "styled-components/macro";
import { NEGATIVE_MARGIN, RELATIVE_PADDING } from "../../Product/Card";

function Artworks({ resource, fill }) {
  const artworks = resource.read();

  const [prevArtworks, setPrevArtworks] = useState(artworks);

  useEffect(() => {
    setPrevArtworks(artworks);
  }, [artworks]);

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

  return (
    <motion.div
      initial={prevArtworks[0].id === artworks[0].id ? "hidden" : "show"}
      animate={prevArtworks[0].id === artworks[0].id ? "show" : "hidden"}
      variants={parent}
      css={`
        padding-top: clamp(8px, 3vw, 16px);
        padding-inline: clamp(8px, 3vw, 16px);
        ${!fill && "padding-inline: 0;"}
        position: relative;
        z-index: 2;
      `}
    >
      <SMasonry className="" breakpointCols={{ default: 3, 1115: 2, 719: 1 }}>
        {artworks.map((artwork) => {
          return (
            <motion.div key={artwork.id} variants={stat}>
              <Artwork artwork={artwork} />
            </motion.div>
          );
        })}
      </SMasonry>
    </motion.div>
  );
}

const SMasonry = styled(Masonry)`
  display: flex;
  margin-left: ${NEGATIVE_MARGIN}; /* gutter size offset */
  width: auto;

  /* Column */
  & > div {
    padding-left: ${RELATIVE_PADDING}; /* gutter size */
    background-clip: padding-box;
  }

  /* Individual item */
  & > div > div {
    margin-bottom: ${RELATIVE_PADDING};
  }
`;

export default Artworks;
