import { Request, Response } from "express";
import {
  getItems,
  addItems,
  getItemCategories,
} from "../services/itemService.js";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const limit = req.body.limit
      ? req.body.limit
      : Number(process.env.DEFAULT_LIMIT);
    const skip = req.body.skip
      ? req.body.skip
      : Number(process.env.DEFAULT_SKIP);

    const { statusCode, totalItemCount, returnItems, message } = await getItems(
      limit,
      skip
    );

    res.status(statusCode).json({ returnItems, totalItemCount, message });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const getAllItemCategories = async (req: Request, res: Response) => {
  try {
    const { statusCode, returnItems, message } = await getItemCategories();

    res.status(statusCode).json({ returnItems: returnItems, message: message });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const itemToAdd = { ...req.body };
    const itemImageToAdd = req.file;

    const { statusCode, message } = await addItems(itemToAdd, itemImageToAdd);

    res.status(statusCode).json({ message });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};
