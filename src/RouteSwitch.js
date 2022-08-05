import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import withTheme from "./styles/withTheme";
import withCart from "./components/Cart/withCart";

import Cart from "./components/Cart/Cart";
import App from "./App";
import Home from "./components/Home";

import ProductCategory from "./components/Product/Category";
import ProductDetails from "./components/Product/Details";

import Artworks from "./components/Artworks";

import { ErrorBoundary } from "react-error-boundary";

const RouteSwitch = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="artworks" element={<Artworks />} />
            <Route path=":category" element={<ProductCategory />} />
            <Route path=":category/:itemId" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
};

function pipe(...fns) {
  return function (Component) {
    return fns.reduce((y, f) => f(y), Component);
  };
}

export default pipe(withCart, withTheme)(RouteSwitch);

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}
