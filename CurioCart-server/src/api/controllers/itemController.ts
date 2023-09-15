import { Item } from "../models/ItemsModel.js";
import { ItemCategory } from "../models/ItemCategoryModel.js";
import { Request, Response } from "express";
import { firebaseStorage } from "../../config/firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const getAllItems = async (req: Request, res: Response) => {
  try {
    let limit = req.body.limit
      ? req.body.limit
      : Number(process.env.DEFAULT_LIMIT);
    let skip = req.body.skip ? req.body.skip : Number(process.env.DEFAULT_SKIP);
    const returnItems = await Item.find();
    res.status(200).json({ returnItems: returnItems });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const getAllItemCategories = async (req: Request, res: Response) => {
  try {
    const returnItemCategories = await ItemCategory.find();
    res.status(200).json({ returnItems: returnItemCategories });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};

export const addItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Item({ ...req.body });
    const addItem = await newItem.save();
    const addedItemId = addItem._id.toString();

    const imageFileObj = req.file;
    if (!imageFileObj) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const metaData = {
      contentType: imageFileObj?.mimetype,
    };

    const imageRef = ref(
      firebaseStorage,
      `item-image/${addedItemId}/${addItem.itemName}`
    );
    const snapShot = await uploadBytesResumable(
      imageRef,
      imageFileObj.buffer,
      metaData
    );
    const imagePath = await getDownloadURL(snapShot.ref);

    addItem.itemImageUrl = imagePath;
    const addedItem = await addItem.save();

    res.status(200).json({ addedItem: addedItem });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err });
  }
};
