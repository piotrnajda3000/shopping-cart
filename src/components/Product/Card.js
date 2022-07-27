import { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { elevation } from "../../styles/mixins";

export const RELATIVE_PADDING = `clamp(8px, 3vw, 16px)`;
export const NEGATIVE_MARGIN = `clamp(-16px, -3vw, -8px)`;

const ProductCard = ({ product }) => {
  const { title, singleUnitPrice, image, id } = product;
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${id}`}>
      <div
        css={`
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: ${RELATIVE_PADDING};
          border-radius: 10px;
          background: white;
          ${elevation("light")};
        `}
      >
        <div>{title}</div>
        <div>{singleUnitPrice}$</div>
        <img
          src={image}
          css={`
            border-radius: 10px;
            margin-left: ${NEGATIVE_MARGIN};
            margin-right: ${NEGATIVE_MARGIN};
            margin-bottom: ${NEGATIVE_MARGIN};
            aspect-ratio: 4 / 5;
            object-fit: cover;
          `}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
