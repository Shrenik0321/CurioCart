export type ItemType = {
  itemName: String;
  itemCategory: String;
  itemType: String;
  itemPrice: Number;
  itemSize: String;
  itemDescription: String;
};

export type ReducerAction = {
  type: string;
  payload: ItemType[];
};
