import React from "react";
import { CartContext } from "../Cart/withCart";
import { mdiCart } from "@mdi/js";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import MediaQuery from "react-responsive";

export const NAV_HEIGHT = 38;

export default function Nav() {
  const { cartAPI } = React.useContext(CartContext);

  const links = [
    { to: "/cart", text: `Cart (${cartAPI.getTotal()}$)`, icon: mdiCart },
  ];

  return (
    <>
      <MediaQuery maxWidth={400}>
        <NavMobile links={links} />
      </MediaQuery>
      <MediaQuery minWidth={401}>
        <NavDesktop links={links} />
      </MediaQuery>
    </>
  );
}
