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
      const foundObjectIndex = state.cartItems.findIndex(
        (item: CartItemsType) => item._id === action.payload._id
      );

      if (foundObjectIndex !== -1) {
        const updatedCartItems = state.cartItems.map(
          (item: any, index: number) =>
            index === foundObjectIndex
              ? { ...item, quantity: item.quantity + 1 }
              : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
          loading: false,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          loading: false,
        };
      }
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

    case "UPDATE_ITEM_QUANTITY_IN_CART": {
      let updatedCartItems = [];
      const foundObjectIndex = state.cartItems.findIndex(
        (item: CartItemsType) => item._id === action.payload._id
      );

      if (foundObjectIndex !== -1) {
        updatedCartItems = state.cartItems.map((item: any, index: number) =>
          index === foundObjectIndex
            ? { ...item, quantity: action.quantity }
            : item
        );
      }

      return {
        ...state,
        cartItems: updatedCartItems,
        loading: false,
      };
    }

    case "REMOVE_ALL_ITEMS_FROM_CART": {
      return {
        ...state,
        cartItems: [],
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
