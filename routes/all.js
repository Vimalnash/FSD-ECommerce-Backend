import { getAllItemCategories, getAllItems, getAllItemUoms, getItem } from "../controllers/all.js";
import { serverError } from "../helpers/handler.js";
import express from "express"

const router = express.Router();

// Items Handling
// Getting All Items
router.get("/get/items", async (req, res) => {
    try {
        const itemsList = await getAllItems();
        if(itemsList.length <= 0) {
            return res.status(400).json({error: "No Active Items! Visit after sometime"});
        }
        return res.status(200).json({message: "Success Getting datas", data: itemsList})
    } catch (error) {
        return serverError(res, error);
    }
});

// Getting Particular Item
router.get("/get/item/:id", async (req, res) => {
    try {
        const itemData = await getItem(req);
        if(!itemData) {
            return res.status(400).json({error: "ItemDataNotFound"});
        }
        return res.status(200).json({message: "Success Getting data", data: itemData})
    } catch (error) {
        return serverError(res, error);
    }
});

// Getting All ItemCategories
router.get("/get/items/itemcategories", async (req, res) => {
    try {
        const itemCategoryList = await getAllItemCategories();
        if(itemCategoryList.length <= 0) {
            return res.status(400).json({error: "No Active ItemCategories! Contact Admin"});
        }
        return res.status(200).json({message: "Success Getting datas", data: itemCategoryList})
    } catch (error) {
        return serverError(res, error);
    }
});

// Getting All ItemUoms
router.get("/get/items/itemuoms", async (req, res) => {
    try {
        const itemUomList = await getAllItemUoms();
        if(itemUomList.length <= 0) {
            return res.status(400).json({error: "No Active ItemUoms! Contact Admin"});
        }
        return res.status(200).json({message: "Success Getting datas", data: itemUomList})
    } catch (error) {
        return serverError(res, error);
    }
});

export const allRouter = router;