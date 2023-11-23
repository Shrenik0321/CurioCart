import { Request, Response } from "express";
import { addOrders, getOrders } from "../services/orderService.js";
import { OrderType } from "../models/orderModel.js";

export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const limit = req.body.limit
      ? req.body.limit
      : Number(process.env.DEFAULT_LIMIT);
    const skip = req.body.skip
      ? req.body.skip
      : Number(process.env.DEFAULT_SKIP);

    const { statusCode, totalOrderCount, returnOrders, message } =
      await getOrders(limit, skip);

    res.status(statusCode).json({ returnOrders, totalOrderCount, message });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const addOrder = async (req: Request, res: Response) => {
  try {
    const orderedItems: OrderType = req.body;
    const { statusCode, message } = await addOrders(orderedItems);
    res.status(statusCode).json({ message });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};
