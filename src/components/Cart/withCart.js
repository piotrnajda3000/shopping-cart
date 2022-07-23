import produce from "immer";
import React, { useEffect } from "react";

export const CartContext = React.createContext(null);

const reducer = (cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return produce(cart, (draft) => {
        draft.push({ ...action.product, quantity: action.quantity });
      });
    default:
      return cart;
    // case "UPDATE_QUANTITY":
    //   const updatedProduct = produce(
    //     action.product,
    //     (p) => (p.quantity = action.quantity)
    //   );
    //   draft[draft.indexOf(action.product)] = updatedProduct;
    //   break;
  }
};

const withCart = (Component) => {
  return () => {
    // const [cart, setCart] = React.useState([]);
    const [cart, dispatch] = React.useReducer(reducer, []);

    useEffect(() => {
      console.log(cart);
    }, [cart]);

    const cartAPI = {
      getProduct: (id) => cart.find((product) => product.id === id),
      getProductIdx: (product) => cart.indexOf(product),
      getTotal: () => {
        console.log(cart);
        return cart.reduce(
          (prev, cur) => cur.quantity * cur.singleUnitPrice + prev,
          0
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
