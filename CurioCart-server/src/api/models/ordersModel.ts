import mongoose from "mongoose";

export interface OrderType extends mongoose.Document {
  itemId: mongoose.Types.ObjectId;
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription?: string;
}

const orderSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items",
    required: true,
  },
  itemName: { type: String, required: true },
  itemCategory: { type: String, required: true },
  itemType: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  itemSize: { type: String, required: true },
  itemDescription: { type: String },
});

export const Order = mongoose.model<OrderType>("Orders", orderSchema);
