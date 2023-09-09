import { createContext, useReducer, ReactNode } from "react";
import { CartItemReducerAction, CartItemsType } from "../types";

export const CartItemsContext = createContext(null);

export type CartStateType = {
  cartItems: CartItemsType[];
};

const initialState: CartStateType = {
  cartItems: [],
};

export const cartItemsReducer = (state: any, action: CartItemReducerAction) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        loading: false,
      };
    }

    case "REMOVE_ITEM_FROM_CART": {
      const idToRemove = (action.payload as any)._id;
      const updatedItems = state.cartItems.filter(
        (item: { _id: string }) => item._id !== idToRemove
      );
      return {
        ...state,
        cartItems: [...updatedItems],
        loading: false,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const CartItemsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartItemsReducer, initialState);
  return (
    <CartItemsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartItemsContext.Provider>
  );
};
