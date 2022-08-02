import React from "react";
import { css } from "styled-components/macro";
import SIcon from "../../styles/components/SIcon";
import { flexHorizontal, flexVertical } from "../../styles/mixins";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import DropdownMenuMobile, {
  SDropdownMenu,
} from "../DropdownMenu/DropdownMenuMobile";
import { categories } from "./categories";

export default function NavMobile({ links }) {
  const [sidebar, setSidebar] = React.useState(false);
  const sidebarRef = React.createRef(null);
  const sidebarClose = () => {
    sidebarRef.current.style.transition = "";
    setSidebar(false);
  };
  const sidebarToggleSmooth = () => {
    sidebarRef.current.style.transition = "transform 150ms ease-in";
    setSidebar((s) => !s);
  };

  return (
    <SNav>
      <div className="topBar">
        <Link to="/" className="logo" onClick={sidebarClose}>
          Shopping Cart
        </Link>
        <SidebarToggleButton
          sidebar={sidebar}
          sidebarToggle={sidebarToggleSmooth}
        />
      </div>
      <div ref={sidebarRef} className={`sidebar ${sidebar ? "active" : ""}`}>
        <div className="sidebarItems">
          {links.map((link) => (
            <Link
              to={link.to}
              key={link.to}
              onClick={sidebarClose}
              css={`
                ${flexHorizontal(0)};
                font-size: 13px;
              `}
            >
              <div
                css={`
                  ${flexHorizontal(0)};
                  position: relative;
                  left: 50%;
                  transform: translateX(-50%);
                `}
              >
                <SIcon $dark path={link.icon} />
                <span>{link.text}</span>
              </div>
            </Link>
          ))}
          <DropdownMenuMobile
            categories={categories}
            sidebarClose={sidebarClose}
          />
        </div>
      </div>
    </SNav>
  );
}

const SNav = styled.nav`
  padding: 8px 16px;
  position: sticky;

  background: white;
  border-bottom: 2px solid #7e22ce;

  top: 0;
  left: 0;
  right: 0;
  z-index: 3;

  .topBar {
    display: flex;
    justify-content: center;
    position: relative;

    .logo {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .sidebar {
    position: absolute;
    z-index: 3;
    top: 38px;
    right: 0;
    bottom: 0;
    left: 0;
    background: #7e22ce;
    transform: translateX(-100%);
    height: 100vh;

    &.active {
      transform: translateX(0%);
      transition: transform 150ms ease-out;
    }

    &Items {
      ${flexVertical(-1)};

      svg,
      span {
        color: white;
      }

      > a,
      ${SDropdownMenu} > .trigger {
        padding: 16px 12px;
        border-bottom: 1px solid hsl(0, 0%, 85%);
      }
    }
  }
`;

const SidebarToggleButton = ({ sidebar, sidebarToggle }) => {
  return (
    <button
      aria-label={`${sidebar ? "open sidebar" : "close sidebar"}`}
      onClick={sidebarToggle}
      css={css`
        background: transparent;
        cursor: pointer;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 24px;
        :hover:not(.touch),
        :focus {
          background: transparent;
          border: none;
          outline: none;
        }
      `}
    >
      <div
        css={`
          width: 24px;
          height: 2px;
          position: absolute;
          right: 0;
          ${sidebar ? "background: transparent" : `background: black`};
          transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
          ::before {
            content: "";
            top: -8px;
            width: 24px;
            height: 2px;
            background: black;
            position: absolute;
            left: 0;
            ${sidebar
              ? "transform: rotate(45deg); top: 0; "
              : "transform: rotate(0)"};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
          }
          ::after {
            top: 8px;
            content: "";
            width: 24px;
            height: 2px;
            background: black;
            position: absolute;
            left: 0;
            ${sidebar
              ? "transform: rotate(-45deg); top: 0;"
              : "transform: rotate(0)"};
            transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
          }
        `}
      />
    </button>
  );
};
