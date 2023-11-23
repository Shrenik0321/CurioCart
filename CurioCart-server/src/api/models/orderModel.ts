import mongoose from "mongoose";

interface ItemOrderType {
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription?: string;
  itemImageUrl?: string;
  quantity: number;
}

export interface OrderType extends mongoose.Document {
  customerId: number;
  items: ItemOrderType[];
  totalCost: number;
}

const orderSchema = new mongoose.Schema({
  customerId: { type: Number },
  items: { type: [] },
  totalCost: { type: Number },
});

export const Order = mongoose.model<OrderType>("Orders", orderSchema);
