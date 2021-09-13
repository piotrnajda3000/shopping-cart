import { ProductBox, Title } from "../../theme/Product/Product";

const ProductPreview = (product, handleClick) => {
  return (
    <ProductBox key={product.id} onClick={() => handleClick(product)}>
      <img src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <p>{product.singleUnitPrice}$</p>
    </ProductBox>
  );
};

export default ProductPreview;
