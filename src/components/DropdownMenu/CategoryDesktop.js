import React from "react";
import { Link } from "react-router-dom";
import { flexHorizontal, flexVertical } from "../../styles/mixins";
import { css } from "styled-components/macro";
import SIcon from "../../styles/components/SIcon";
import styled from "styled-components/macro";

const CategoryDesktop = ({ category, closeDropdown }) => {
  return (
    <SCategory>
      <div className="heading">{category.name}</div>
      <div className="links">
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
  ${flexHorizontal(-1)};
  font-size: 13px;
`;

const SCategory = styled.div`
  .heading {
    padding-bottom: 8px;
    /* border-bottom: 1px solid hsl(0, 0%, 75%); */
  }

  .links {
    ${flexVertical(null)};

    ${SLink}:not(:last-child) {
      border-bottom: 1px solid hsl(272, 50%, 54%);
      padding-bottom: 4px;
    }
    ${SLink}:not(:first-child) {
      padding-top: 4px;
    }
  }
`;

export default CategoryDesktop;
