import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { css } from "styled-components/macro";
import { CartContext } from "./components/Cart/withCart";
import Spacer from "./styles/components/Spacer";
import { Link } from "react-router-dom";

function App() {
  const { cartAPI } = useContext(CartContext);

  const cartTotal = cartAPI.getTotal();

  return (
    <div
      css={`
        padding: 16px;
      `}
    >
      <Navbar />
      <Spacer size="16" />
      <Link to="/cart">View Cart ({cartTotal}$)</Link>
      <Outlet />
    </div>
  );
}

export default App;
