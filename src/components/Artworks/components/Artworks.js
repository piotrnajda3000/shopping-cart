import React from "react";
import Artwork from "./Artwork";
import { motion } from "framer-motion";
import { css } from "styled-components/macro";
import { NAV_HEIGHT } from "../../Nav";
import Masonry from "react-masonry-css";
import styled from "styled-components/macro";
import { NEGATIVE_MARGIN, RELATIVE_PADDING } from "../../Product/Card";

function Artworks({ resource }) {
  const artworks = resource.read();

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
      initial="hidden"
      animate="show"
      variants={parent}
      css={`
        padding-top: clamp(8px, 3vw, 16px);
        padding-inline: clamp(8px, 3vw, 16px);
        position: relative;
        z-index: 2;
      `}
    >
      <SMasonry className="" breakpointCols={{ default: 3, 1115: 2, 719: 1 }}>
        {artworks.map((artwork) => {
          return (
            <motion.div key={artwork.id} variants={stat} css={``}>
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
    background: grey;
    margin-bottom: ${RELATIVE_PADDING};
  }
`;

export default Artworks;
