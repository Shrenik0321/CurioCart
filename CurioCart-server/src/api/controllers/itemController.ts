import { Item } from "../models/ItemsModel.js";
import { Request, Response } from "express";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    const data = await Item.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.send(err).status(500);
  }
};
