import { Item, ItemType } from "../models/ItemsModel.js";
import { firebaseStorage } from "../../config/firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ItemCategory, ItemCategoryType } from "../models/ItemCategoryModel.js";

export const getItems = async (
  limit: number,
  skip: number
): Promise<{
  statusCode: number;
  totalItemCount?: number;
  returnItems?: ItemType[];
  message?: string;
}> => {
  try {
    const returnItems = await Item.find();
    const returnItemsWithLimitSkip = await Item.find().limit(limit).skip(skip);

    return {
      statusCode: 201,
      totalItemCount: returnItems.length,
      returnItems: returnItemsWithLimitSkip,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};

export const getItemCategories = async (): Promise<{
  statusCode: number;
  returnItems?: ItemCategoryType[];
  message?: string;
}> => {
  try {
    const returnItemCategories = await ItemCategory.find();

    return {
      statusCode: 201,
      returnItems: returnItemCategories,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};

export const addItems = async (
  itemToAdd: ItemType,
  itemImageToAdd: Express.Multer.File | undefined
): Promise<{
  statusCode: number;
  message: string;
}> => {
  try {
    const newItem = new Item({ ...itemToAdd });
    const addItem = await newItem.save();
    const addedItemId = addItem._id.toString();

    const imageFileObj = itemImageToAdd;
    if (!imageFileObj) {
      return { statusCode: 409, message: "No image uploaded" };
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
    return { statusCode: 200, message: "Successfully added item" };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};
