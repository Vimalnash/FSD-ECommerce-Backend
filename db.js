import mongoose from "mongoose";

// Database Connectivity
export function connectDatabase(MONGO_URL) {
    try {
        mongoose.connect(MONGO_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error Connecting Database : ", error);
    }
}