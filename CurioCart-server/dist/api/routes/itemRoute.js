import { getAllItemCategories, getAllItems, addItem, } from "../controllers/itemController.js";
import express from "express";
import { uploadStrategy } from "../middlewares/imageUploadStrategy.js";
import { requireAuth } from "../middlewares/requireAuth.js";
const itemRouter = express.Router();
itemRouter.post("/get-all-items", getAllItems);
itemRouter.post("/get-all-item-categories", getAllItemCategories);
itemRouter.post("/add-item", requireAuth, uploadStrategy, addItem);
export default itemRouter;
//# sourceMappingURL=itemRoute.js.map