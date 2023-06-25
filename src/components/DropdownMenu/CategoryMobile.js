import React from "react";
import { Link } from "react-router-dom";
import { flexHorizontal, flexVertical } from "../../styles/mixins";
import { css } from "styled-components/macro";
import SIcon from "../../styles/components/SIcon";
import styled from "styled-components/macro";
import { mdiMenuDown } from "@mdi/js";

const CategoryMobile = ({
  category,
  closeDropdown,
  handleCategoryClick,
  activeCategory,
}) => {
  return (
    <SCategory>
      <div
        className="heading"
        onClick={() => handleCategoryClick(category.name)}
      >
        <span>{category.name}</span>
        <SIcon size="18px" $dark path={mdiMenuDown} />
      </div>
      <div
        className={`links ${activeCategory === category.name ? "active" : ""}`}
      >
        {category.links.map((link) => (
          <SLink to={link.to} key={link.to} onClick={closeDropdown}>
            <SIcon size="18px" $dark path={link.icon} />
            {link.text}
          </SLink>
        ))}
      </div>
    </SCategory>
  );
};

const SLink = styled(Link)`
  ${flexHorizontal(1)};
  font-size: 13px;
  padding-block: 16px;
  padding-left: 8px;
  background: hsl(330, 72%, 54%);
`;

const SCategory = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  position: relative;

  .heading {
    padding-block: 16px;
    ${flexHorizontal(-1)};
    width: 100%;
    justify-content: space-between;
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }

  .links {
    width: 100%;
    ${flexVertical(null)};
    display: none;
    color: white;
    ${SLink}:not(:last-child) {
      border-bottom: 1px solid hsl(272, 72%, 94%);
    }
    ${SLink}:not(:first-child) {
    }
  }

  .active {
    display: flex;
  }
`;

export default CategoryMobile;
