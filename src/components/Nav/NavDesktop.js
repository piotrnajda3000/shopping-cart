import React from "react";
import { Link } from "react-router-dom";
import SIcon from "../../styles/components/SIcon";
import styled, { css } from "styled-components/macro";
import { flexHorizontal } from "../../styles/mixins";
import DropdownMenuDesktop from "../DropdownMenu/DropdownMenuDesktop";
import { categories } from "./categories";

export default function NavDesktop({ links }) {
  return (
    <SNav>
      <Link to="/" className="logo">
        Shopping Cart
      </Link>
      <div className={`links`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            css={`
              ${flexHorizontal(2)};
              font-size: 14px;
            `}
          >
            <SIcon path={link.icon} $dark size="18px" />
            <span>{link.text}</span>
          </Link>
        ))}
        <DropdownMenuDesktop categories={categories} />
      </div>
    </SNav>
  );
}

const SNav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;

  ${flexHorizontal(4)};
  margin-inline: auto;
  max-width: 1366px;

  padding: 8px 16px;

  background: white;
  border-bottom: 2px solid #7e22ce;
  border-top: 0;

  .logo {
    font-weight: 500;
    font-size: 16px;
  }

  > .links {
    ${flexHorizontal(7)};
    margin-left: auto;
  }
`;
