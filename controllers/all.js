import { ITEM } from "../models/masters/item.js";
import { ITEMCATEGORY } from "../models/masters/itemCategory.js";
import { ITEMUOM } from "../models/masters/itemUom.js";

// Items Handling
function getAllItems() {
    return ITEM.find({isActive: true}).populate({path: "categoryId uomId"});
};

function getItem(req) {
    return ITEM.findOne({_id: req.params.id}).populate({path: "categoryId uomId"});
};

function getAllItemCategories() {
    return ITEMCATEGORY.find({isActive: true})
};

function getAllItemUoms() {
    return ITEMUOM.find({isActive: true})
};

export {
    getAllItems,
    getItem,
    getAllItemCategories,
    getAllItemUoms
};