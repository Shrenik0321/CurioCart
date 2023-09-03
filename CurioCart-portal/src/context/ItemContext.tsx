import { useEffect, createContext, useReducer, ReactNode } from "react";

import { ReducerAction } from "../types";

export const ItemContext = createContext(null);

type ItemStateType = {
  loading: boolean;
  items: [];
};

// Initial State
const initialState: ItemStateType = {
  loading: false,
  items: [],
};

export const itemReducer = (state: any, action: ReducerAction) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }

    case "LOAD_ALL_ITEMS": {
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false,
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

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: [] });
  }, []);

  return (
    <ItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
