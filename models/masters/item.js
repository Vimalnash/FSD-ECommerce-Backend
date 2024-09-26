import mongoose from "mongoose";
import { ObjectId } from "bson";

const itemSchema = new mongoose.Schema(
    {
        itemTitleDisplay: { type: String, required: true, maxlength: 256, trim: true },
        itemName: { type: String, required: true,maxlength: 256, trim: true },
        categoryId: {type: ObjectId, ref:"itemcategories", required: true},
        category: { type: String, required: true, trim: true },
        brand: { type: String, required: true, trim: true },
        model: { type: String, required: true, trim: true },
        color: { type: String, required: true, trim: true },
        size: { type: String, required: true, trim: true },
        MaxRetailPrice: { type: Number, required: true, trim: true },
        sellingPrice: { type: Number, trim: true },
        isActive: { type: Boolean, required: true, default: true },
        description: { type: String, trim: true },
        imgUrl: {type: String, trim: true},
        qtyStock: {type: Number},
        uomId: {type: ObjectId, ref:"itemuoms", required: true},
        uom: {type: String}
    },
    {
        timestamp: true
    }
);


const ITEM = mongoose.model("items", itemSchema);
export { ITEM };