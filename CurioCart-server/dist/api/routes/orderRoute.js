import { addOrder, getAllOrders } from "../controllers/orderController.js";
import express from "express";
// import { requireAuth } from "../middlewares/requireAuth.js";
const orderRouter = express.Router();
orderRouter.post("/get-all-orders", getAllOrders);
orderRouter.post("/add-order", addOrder);
export default orderRouter;
//# sourceMappingURL=orderRoute.js.map