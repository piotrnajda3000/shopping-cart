import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import withTheme from "./styles/withTheme";
import withCart from "./components/Cart/withCart";
import Cart from "./components/Cart/Cart";
import App from "./App";
import Home from "./components/Home";
import ProductCatalog from "./components/Product/Catalog";
import ProductCategory from "./components/Product/Category";
import ProductDetails from "./components/Product/Details";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<ProductCatalog />}>
            <Route path=":category" element={<ProductCategory />} />
            <Route path=":category/:itemId" element={<ProductDetails />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default pipe(withCart, withTheme)(RouteSwitch);

function pipe(...fns) {
  return function (Component) {
    return fns.reduce((y, f) => f(y), Component);
  };
}
