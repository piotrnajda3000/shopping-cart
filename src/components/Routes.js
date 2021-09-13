import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { headphones, speakers } from "../data/products.js";

import Home from "./Home";
import Catalog from "./Catalog";
import Cart from "./Cart";

import { ThemeProvider } from "styled-components";
import { theme, invertTheme } from "../theme/theme";
import GlobalStyle from "../theme/GlobalStyle";

const Routes = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path="/shopping-cart">
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home theme={theme} />
          </ThemeProvider>
        </Route>
        <ThemeProvider theme={invertTheme}>
          <GlobalStyle />
          <Route exact path="/shopping-cart/catalog">
            <Catalog
              products={[...headphones, ...speakers]}
              cart={cart}
              setCart={setCart}
            />
          </Route>
          <Route exact path="/shopping-cart/catalog/speakers">
            <Catalog products={speakers} cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/shopping-cart/catalog/headphones">
            <Catalog products={headphones} cart={cart} setCart={setCart} />
          </Route>
          <Route exact path="/shopping-cart/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default Routes;
