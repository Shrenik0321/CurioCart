export type ItemType = {
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription: string;
  itemImageUrl: string;
  quantity?: number;
};

export type OrderType = {
  items: ItemType[];
  totalCost: number;
  customerId: number;
};

export type ItemReducerAction = {
  type: string;
  payload: ItemType[];
  loading: boolean;
};

export type AuthReducerAction = {
  type: string;
  isAuthenticated: boolean;
};
