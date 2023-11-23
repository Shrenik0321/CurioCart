import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    customerId: { type: Number },
    items: { type: [] },
    totalCost: { type: Number },
});
export const Order = mongoose.model("Orders", orderSchema);
//# sourceMappingURL=orderModel.js.map