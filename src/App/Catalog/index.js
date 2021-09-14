import { ProductPreview } from "../Product/ProductPreview";
import { ProductClicked } from "../Product/ProductClicked";

import { ResponsiveLayout } from "../ResponsiveLayout";

export const Catalog = ({
  products,
  cart,
  setCart,
  productsInEditMode,
  setProductsInEditMode,
}) => {
  const handleClick = (clickedProduct) => {
    const newProductInEditMode = { quantity: 1, ...clickedProduct };
    setProductsInEditMode([...productsInEditMode, newProductInEditMode]);
  };

  const handleQuantityChange = (e, product) => {
    setProductsInEditMode(
      productsInEditMode.map((p) => {
        if (p.id === product.id) {
          p = { ...product, quantity: +e.target.value };
        }
        return p;
      })
    );
  };

  const handleCancel = (productID) => {
    setProductsInEditMode(productsInEditMode.filter((p) => p.id !== productID));
  };

  const handleAddToCart = (product) => {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === product.id) {
            cartItem.quantity += product.quantity;
          }
          return cartItem;
        })
      );
    } else {
      const productToAdd = productsInEditMode.find((p) => p.id === product.id);
      setCart([...cart, productToAdd]);
    }
    handleCancel(product.id);
  };

  const productBoxes = products.map((product) => {
    const clickedProduct = productsInEditMode.find((p) => product.id === p.id);
    if (clickedProduct) {
      return ProductClicked(
        clickedProduct,
        handleCancel,
        handleAddToCart,
        handleQuantityChange
      );
    } else {
      return ProductPreview(product, handleClick);
    }
  });

  return (
    <>
      <ResponsiveLayout cart={cart} overflowY="scroll">
        {productBoxes}
      </ResponsiveLayout>
    </>
  );
};

export default Catalog;
