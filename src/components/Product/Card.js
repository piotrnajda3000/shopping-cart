import { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, singleUnitPrice, image, id } = product;
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/${id}`}>
      <div
        css={`
          padding: 16px;
          border: 1px solid black;
          display: flex;
          flex-direction: column;
          gap: 4px;
        `}
      >
        <div>{title}</div>
        <div>{singleUnitPrice}$</div>
        <img
          src={image}
          css={`
            width: 300px;
            height: 300px;
            object-fit: cover;
          `}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
