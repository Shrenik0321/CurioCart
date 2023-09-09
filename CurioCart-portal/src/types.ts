export type ItemType = {
  itemName: String;
  itemCategory: String;
  itemType: String;
  itemPrice: Number;
  itemSize: String;
  itemDescription: String;
};

export type ItemReducerAction = {
  type: string;
  payload: ItemType[];
};

export type CartItemsType = {
  cartItems: ItemType[];
  itemName: String;
  itemCategory: String;
  itemType: String;
  itemPrice: Number;
  itemSize: String;
  itemDescription: String;
};

export type CartItemReducerAction = {
  type: string;
  payload: Object;
};
