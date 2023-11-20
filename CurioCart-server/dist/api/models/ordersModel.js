import mongoose from "mongoose";
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
export const Order = mongoose.model("Orders", orderSchema);
//# sourceMappingURL=ordersModel.js.map