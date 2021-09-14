import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";

import { headphones, speakers } from "../../shared/data/products.js";

import { Home } from "../Home";
import { Catalog } from "../Catalog";
import { Cart } from "../Cart";

import { ThemeProvider } from "styled-components";
import { theme, invertTheme } from "../../shared/theme/theme";
import GlobalStyle from "../../shared/theme/GlobalStyle";

export const Routes = () => {
  const [cart, setCart] = useState([]);
  const [productsInEditMode, setProductsInEditMode] = useState([]);

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
              productsInEditMode={productsInEditMode}
              setProductsInEditMode={setProductsInEditMode}
            />
          </Route>
          <Route exact path="/shopping-cart/catalog/speakers">
            <Catalog
              products={speakers}
              cart={cart}
              setCart={setCart}
              productsInEditMode={productsInEditMode}
              setProductsInEditMode={setProductsInEditMode}
            />
          </Route>
          <Route exact path="/shopping-cart/catalog/headphones">
            <Catalog
              products={headphones}
              cart={cart}
              setCart={setCart}
              productsInEditMode={productsInEditMode}
              setProductsInEditMode={setProductsInEditMode}
            />
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
