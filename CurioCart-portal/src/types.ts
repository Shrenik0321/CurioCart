export type ItemType = {
  _id: string;
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
  loading: boolean;
};

export type CartItemsType = {
  _id: string;
  cartItems: ItemType[];
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription: string;
  itemImageUrl: string;
  quantity: number;
};

export type CartItemReducerAction = {
  type: string;
  payload: ItemType;
  quantity?: number;
};
