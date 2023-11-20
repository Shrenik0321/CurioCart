import { addOrder, getAllOrders } from "../controllers/orderController.js";
import express from "express";
import { requireAuth } from "../middlewares/requireAuth.js";

const orderRouter = express.Router();

orderRouter.post("/get-all-orders", requireAuth, getAllOrders);
orderRouter.post("/add-order", requireAuth, addOrder);

export default orderRouter;
