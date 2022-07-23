import { useState } from "react";

const useQuantity = (min, initial) => {
  const [quantity, setQuantity] = useState(initial);

  const handleQuantityChange = (e) => {
    const input = e.target.value;
    if (input < min) {
      setQuantity(min);
      return;
    }
    setQuantity(input);
  };

  return [quantity, handleQuantityChange];
};

export default useQuantity;
