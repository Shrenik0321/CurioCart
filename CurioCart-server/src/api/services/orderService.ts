import { Order, OrderType } from "../models/orderModel.js";

export const getOrders = async (
  limit: number,
  skip: number
): Promise<{
  statusCode: number;
  totalOrderCount?: number;
  returnOrders?: OrderType[];
  message?: string;
}> => {
  try {
    const returnOrders = await Order.find();
    const returnOrdersWithLimitSkip = await Order.find()
      .limit(limit)
      .skip(skip);

    return {
      statusCode: 201,
      totalOrderCount: returnOrders.length,
      returnOrders: returnOrdersWithLimitSkip,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};

export const addOrders = async (
  orderedItems: OrderType
): Promise<{
  statusCode: number;
  message: string;
}> => {
  try {
    const newOrder = new Order({ ...orderedItems });
    await newOrder.save();
    return { statusCode: 200, message: "Successfully added order" };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};
