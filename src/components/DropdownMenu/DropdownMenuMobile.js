import React from "react";
import { flexHorizontal, flexVertical } from "../../styles/mixins";
import { css } from "styled-components/macro";
import styled from "styled-components/macro";
import { mdiMenuDown } from "@mdi/js";
import SIcon from "../../styles/components/SIcon";
import CategoryMobile from "./CategoryMobile";
import useDropdown from "./hooks/useDropdown";
import useAccordion from "./hooks/useAccordion";

export default function DropdownMenuMobile({ categories, sidebarClose }) {
  const { dropdown, dropdownRef, toggleRef, toggleDropdown, closeDropdown } =
    useDropdown(sidebarClose);

  const { activeCategory, handleCategoryClick } = useAccordion();

  return (
    <SDropdownMenu>
      <div ref={toggleRef} onClick={toggleDropdown} className="trigger">
        <SIcon path={mdiMenuDown} $dark size="18px" />
        <span>Catalog</span>
      </div>
      {dropdown ? (
        <div className="openMenu" ref={dropdownRef}>
          {categories.map((category) => (
            <CategoryMobile
              activeCategory={activeCategory}
              handleCategoryClick={handleCategoryClick}
              category={category}
              key={category.name + "-mobile"}
              closeDropdown={closeDropdown}
            />
          ))}
        </div>
      ) : null}
    </SDropdownMenu>
  );
}

export const SDropdownMenu = styled.div`
  position: relative;

  .trigger {
    cursor: pointer;
    ${flexHorizontal(0)};
    font-size: 13px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .openMenu {
    padding: 0 16px;
    ${flexVertical(-1)};
    align-items: flex-start;
    justify-content: center;
  }
`;
