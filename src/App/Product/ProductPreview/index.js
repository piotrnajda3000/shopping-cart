import { Product, Title } from "../shared/Product";

export const ProductPreview = (product, handleClick) => {
  return (
    <Product key={product.id} onClick={() => handleClick(product)}>
      <img src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <p>{product.singleUnitPrice}$</p>
    </Product>
  );
};