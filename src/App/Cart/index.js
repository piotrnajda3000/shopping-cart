import { ProductInCart } from "../Product/ProductInCart";

import { ResponsiveLayout } from "../ResponsiveLayout";

export const Cart = ({ cart, setCart }) => {
  const handleQuantityChange = (e, product) => {
    setCart(
      cart.map((p) => {
        if (p.id === product.id) {
          p = { ...product, quantity: +e.target.value };
        }
        return p;
      })
    );
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((cartItem) => cartItem.id !== product.id));
  };

  const productsInCart = cart.map((product) => {
    return ProductInCart(product, handleQuantityChange, handleRemoveFromCart);
  });

  return (
    <>
      <ResponsiveLayout overflowY="auto" cart={cart}>
        {productsInCart}
      </ResponsiveLayout>
    </>
  );
};
