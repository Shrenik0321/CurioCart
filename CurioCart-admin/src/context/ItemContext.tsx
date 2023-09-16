import { createContext, useReducer, ReactNode } from "react";
import { ItemType, ItemReducerAction } from "../types";

export const ItemContext = createContext(null);

export type ItemStateType = {
  loading: boolean;
  items: ItemType[];
};

// Initial State
const initialState: ItemStateType = {
  loading: false,
  items: [],
};

export const itemReducer = (state: any, action: ItemReducerAction) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case "LOAD_ALL_ITEMS": {
      return {
        ...state,
        items: [...action.payload],
        loading: action.loading,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

export const ItemContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(itemReducer, initialState);

  return (
    <ItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
