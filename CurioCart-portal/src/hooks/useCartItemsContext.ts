import { useContext } from "react";
import { CartItemsContext } from "../context/CartItemsContext";

export const useCartItemsContext = () => {
  const context = useContext(CartItemsContext);

  if (!context) {
    throw Error(
      "useCartItemsContext must be used inside an CartItemsContextProvider"
    );
  }

  return context;
};
