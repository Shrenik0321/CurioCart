import mongoose from "mongoose";
const itemCategorySchema = new mongoose.Schema({
    itemCategoryType: { type: String, required: true },
});
export const ItemCategory = mongoose.model("Item-Categories", itemCategorySchema);
//# sourceMappingURL=ItemCategoryModel.js.map