import mongoose from "mongoose";

export interface ItemType extends mongoose.Document {
  itemName: string;
  itemCategory: string;
  itemType: string;
  itemPrice: number;
  itemSize: string;
  itemDescription?: string;
  itemImageUrl?: string;
}

export const itemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemCategory: { type: String, required: true },
  itemType: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  itemSize: { type: String, required: true },
  itemDescription: { type: String },
  itemImageUrl: { type: String },
});

export const Item = mongoose.model<ItemType>("Items", itemSchema);
