import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    itemCategory: { type: String, required: true },
    itemType: { type: String, required: true },
    itemPrice: { type: String, required: true },
    itemSize: { type: String, required: true },
    itemDescription: { type: String },
    itemImageUrl: { type: String },
});
export const Item = mongoose.model("Items", itemSchema);
//# sourceMappingURL=ItemsModel.js.map