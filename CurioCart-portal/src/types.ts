export type ItemType = {
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription: string;
  itemImageUrl: string;
};

export type ItemReducerAction = {
  type: string;
  payload: ItemType[];
};

export type CartItemsType = {
  cartItems: ItemType[];
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription: string;
  itemImageUrl: string;
};

export type CartItemReducerAction = {
  type: string;
  payload: Object;
};
