import {
  Product,
  Title,
  QuantityInput,
  ControlButtons,
  ControlButton,
} from "./Product.styled";

export const ProductInCart = (
  product,
  handleQuantityChange,
  handleRemoveFromCart
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
        <ControlButton onClick={() => handleRemoveFromCart(product)}>
          Remove from Cart
        </ControlButton>
      </ControlButtons>
      <p>{(product.singleUnitPrice * product.quantity).toFixed(2)}$</p>
    </Product>
  );
};
