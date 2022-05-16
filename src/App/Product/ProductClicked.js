import {
  Product,
  Title,
  QuantityInput,
  ControlButtons,
  ControlButton,
  Cancel,
} from "./Product.styled";

export const ProductClicked = (
  product,
  handleCancel,
  handleAddToCart,
  handleQuantityChange
) => {
  return (
    <Product key={product.title}>
      <img src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <QuantityInput
        type="number"
        value={product.quantity}
        onChange={(e) => handleQuantityChange(e, product)}
        min="1"
        max="9"
      />
      <ControlButtons>
        <ControlButton onClick={() => handleAddToCart(product)}>
          Add To Cart
        </ControlButton>
        <Cancel onClick={() => handleCancel(product.id)}>Cancel</Cancel>
      </ControlButtons>
      <p>{(product.singleUnitPrice * product.quantity).toFixed(2)}$</p>
    </Product>
  );
};