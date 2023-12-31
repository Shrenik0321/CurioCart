import mongoose from "mongoose";
export const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemCategory: { type: String, required: true },
    itemType: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemSize: { type: String, required: true },
    itemDescription: { type: String },
    itemImageUrl: { type: String },
});
export const Item = mongoose.model("Items", itemSchema);
//# sourceMappingURL=ItemsModel.js.map