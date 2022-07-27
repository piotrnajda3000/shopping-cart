import React from "react";
import { elevation, flexHorizontal, flexVertical } from "../../styles/mixins";
import { css } from "styled-components/macro";
import styled from "styled-components/macro";
import CategoryDesktop from "./CategoryDesktop";
import { mdiMenuDown } from "@mdi/js";
import SIcon from "../../styles/components/SIcon";

export default function DropdownMenuDesktop({ categories }) {
  const [dropdown, setDropdown] = React.useState(false);

  const dropdownRef = React.useRef(null);
  const toggleRef = React.useRef(null);

  const toggleDropdown = () => setDropdown((s) => !s);
  const closeDropdown = () => setDropdown(false);
  const closeOpenDropdown = (e) => {
    if (
      dropdownRef.current &&
      dropdown &&
      !dropdownRef.current.contains(e.target) &&
      !toggleRef.current.contains(e.target)
    ) {
      setDropdown(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", closeOpenDropdown);
    return () => {
      window.removeEventListener("mousedown", closeOpenDropdown);
    };
  }, [dropdown]);

  return (
    <SDropdownMenu>
      <button
        ref={toggleRef}
        onClick={toggleDropdown}
        css={`
          background: transparent;
          border: 0;
          cursor: pointer;
          ${flexHorizontal(0)};
          font-size: 14px;
        `}
      >
        <SIcon
          path={mdiMenuDown}
          $dark
          size="18px"
          css={`
            transition: all 150ms ease-in;
            ${dropdown &&
            css`
              transform: rotate(180deg);
              transition: all 150ms ease-out;
              color: #7e22ce;
            `}
          `}
        />
        <span>Catalog</span>
      </button>
      {dropdown ? (
        <div className="openMenu" ref={dropdownRef}>
          {categories.map((category) => (
            <CategoryDesktop
              category={category}
              key={category.name}
              closeDropdown={closeDropdown}
            />
          ))}
        </div>
      ) : null}
    </SDropdownMenu>
  );
}

const SDropdownMenu = styled.div`
  position: relative;
  .openMenu {
    position: absolute;
    background: white;
    top: 24px;
    right: 0;
    z-index: 3;
    width: fit-content;
    ${elevation("light")}
    ${flexVertical(3)};
    padding: 16px;
  }
`;
