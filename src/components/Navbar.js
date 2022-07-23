import React from "react";
import { Link } from "react-router-dom";
import { css } from "styled-components/macro";
import { horizontalItem } from "../styles/mixins";

export default function Navbar() {
  return (
    <div
      css={`
        ${horizontalItem(3)};
      `}
    >
      <Link to="/catalog">Catalog</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
