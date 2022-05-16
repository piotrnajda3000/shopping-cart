import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";

import { CartToggle } from "./CartToggle.styled";
import { CartLink } from "./CartLink.styled";
import { CartAmount } from "./CartAmount.styled";

export const CartBar = ({ cart }) => {
  if (cart === null) {
    return <CartToggle style={{ cursor: "default" }} />;
  }

  return (
    <CartLink to="/shopping-cart/cart">
      <CartToggle>
        <p>
          cart{" "}
          <CartAmount>
            {" "}
            {cart.reduce((total, current) => {
              return (total += current.quantity);
            }, 0)}
          </CartAmount>
        </p>
        <ExpandMoreTwoToneIcon />
      </CartToggle>
    </CartLink>
  );
};
