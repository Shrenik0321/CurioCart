import { Item } from "../models/ItemsModel.js";
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
//# sourceMappingURL=itemController.js.map