import { Item } from "../models/ItemsModel.js";
import { ItemCategory } from "../models/ItemCategoryModel.js";
import { firebaseStorage } from "../../config/firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import fs from "fs";
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
        const headphone = "D:/Program Codes/VSCODE/CurioCart/CurioCart-server/src/assets/headphones_c_1.webp";
        fs.readFile(headphone, async (err, data) => {
            if (err) {
                console.log("Error reading the file");
                console.log(err);
            }
            else {
                // Convert data to ArrayBuffer
                const arrayBuffer = data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength);
                const metadata = {
                    contentType: "image/jpeg",
                };
                const testRef = ref(firebaseStorage, `item-image/headphone`);
                const snapShot = await uploadBytesResumable(testRef, arrayBuffer, metadata);
                const filePath = await getDownloadURL(snapShot.ref);
                console.log(filePath);
            }
        });
    }
    catch (err) {
        console.log("here");
        console.log(err);
    }
};
//# sourceMappingURL=itemController.js.map