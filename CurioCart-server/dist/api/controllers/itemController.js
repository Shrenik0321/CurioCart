import { Item } from "../models/ItemsModel.js";
import { ItemCategory } from "../models/ItemCategoryModel.js";
import { firebaseStorage } from "../../config/firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export const getAllItems = async (req, res) => {
    try {
        const data = await Item.find();
        res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        res.send(err).status(500);
    }
};
export const getAllItemCategories = async (req, res) => {
    try {
        const data = await ItemCategory.find();
        res.status(200).json(data);
    }
    catch (err) {
        console.error(err);
        res.send(err).status(500);
    }
};
export const addItem = async (req, res) => {
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
        const imageRef = ref(firebaseStorage, `item-image/${addedItemId}/${addItem.itemName}`);
        const snapShot = await uploadBytesResumable(imageRef, imageFileObj.buffer, metaData);
        const imagePath = await getDownloadURL(snapShot.ref);
        addItem.itemImageUrl = imagePath;
        const addedItem = await addItem.save();
        res.status(200).json(addedItem);
    }
    catch (err) {
        console.log(err);
    }
};
//# sourceMappingURL=itemController.js.map