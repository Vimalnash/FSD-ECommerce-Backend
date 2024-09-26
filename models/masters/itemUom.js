import mongoose from "mongoose";

const itemUomSchema = new mongoose.Schema(
    {
        itemUomName: { type: String, required: true, maxlength: 256, trim: true },
        isActive: { type: Boolean, required: true, default: true },
        description: { type: String, trim: true }
    },
    {
        timestamp: true
    }
);


const ITEMUOM = mongoose.model("itemuoms", itemUomSchema);
export { ITEMUOM };