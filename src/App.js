import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
