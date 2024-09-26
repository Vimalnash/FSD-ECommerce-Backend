import mongoose from "mongoose";

const itemCategorySchema = new mongoose.Schema(
    {
        itemCategoryName: { type: String, required: true, maxlength: 256, trim: true },
        isActive: { type: Boolean, required: true, default: true },
        description: { type: String, trim: true, default: null }
    },
    {
        timestamp: true
    }
);


const ITEMCATEGORY = mongoose.model("itemcategories", itemCategorySchema);
export { ITEMCATEGORY };