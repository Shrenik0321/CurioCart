import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemName: { type: String },
  itemType: { type: String },
  itemPrice: { type: Number },
  itemSize: { type: String },
});

export const Item = mongoose.model("Items", itemSchema);
