import mongoose from "mongoose";
import { itemSchema } from "./ItemsModel.js";
const itemOrderSchema = new mongoose.Schema({
    items: [itemSchema],
    quantity: { type: Number },
});
const orderSchema = new mongoose.Schema({
    // customerId: { type: mongoose.Schema.Types.ObjectId },
    items: { type: [itemOrderSchema] },
    totalPrice: { type: Number },
});
export const Order = mongoose.model("Orders", orderSchema);
//# sourceMappingURL=ordersModel.js.map