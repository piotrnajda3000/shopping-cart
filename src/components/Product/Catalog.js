import React from "react";
import { Link, Outlet } from "react-router-dom";
import { horizontalItem } from "../../styles/mixins";
import { css } from "styled-components/macro";
import Spacer from "../../styles/components/Spacer";

export default function Catalog() {
  return (
    <>
      <Spacer axis="y" size="16" />
      <div
        css={`
          ${horizontalItem(3)};
        `}
      >
        <Link to="/catalog/headphones">Headphones</Link>
        <Link to="/catalog/speakers">Speakers</Link>
      </div>
      <Spacer axis="y" size="16" />
      <Outlet />
    </>
  );
}
