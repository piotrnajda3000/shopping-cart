import produce, { original } from "immer";
import React, { useEffect } from "react";
import { useImmerReducer } from "use-immer";

export const CartContext = React.createContext(null);

const reducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      cart.push({ ...action.product, quantity: action.quantity });
      break;
    case "REMOVE_FROM_CART":
      return cart.filter((product) => product.id !== action.id);
    case "UPDATE_QUANTITY":
      const updatedProduct = produce(action.product, (p) => {
        p.quantity = action.quantity;
      });
      cart[original(cart).indexOf(action.product)] = updatedProduct;
      break;
    default:
      return cart;
  }
};

const withCart = (Component) => {
  return () => {
    const [cart, dispatch] = useImmerReducer(reducer, []);

    const cartAPI = {
      getProduct: (id) => cart.find((product) => product.id === id),
      getProductIdx: (product) => cart.indexOf(product),
      getTotal: () => {
        return (
          Math.round(
            cart.reduce(
              (prev, cur) => cur.quantity * cur.singleUnitPrice + prev,
              0
            ) * 100
          ) / 100
        );
      },
    };

    return (
      <CartContext.Provider value={{ cartAPI, cart, dispatch }}>
        <Component />
      </CartContext.Provider>
    );
  };
};
export default withCart;
