import React from "react";
import ArtworksContainer from "./Artworks-container";

function Artworks({ fill, showMore }) {
  return (
    <div>
      <ArtworksContainer fill={fill} showMore={showMore} />
    </div>
  );
}

export default Artworks;
