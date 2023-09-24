import mongoose from "mongoose";

export interface ItemCategoryType extends mongoose.Document {
  itemCategoryType: string;
}

const itemCategorySchema = new mongoose.Schema({
  itemCategoryType: { type: String, required: true },
});

export const ItemCategory = mongoose.model<ItemCategoryType>(
  "Item-Categories",
  itemCategorySchema
);
