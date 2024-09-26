import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectDatabase } from "./db.js";
import { userRouter } from "./routes/user.js";
import { allRouter } from "./routes/all.js";

// Config Environment Variable
dotenv.config();

// Initializing Express
const app = express();

// Setting Middlewares
app.use(express.json());
app.use(cors());

// Configuring Environment Variables
const PORT = process.env.PORT;
const MONGO_URL_LOCAL = process.env.MONGO_URL_LOCAL;
// const MONGO_URL_ATLAS = process.env.MONGO_URL_ATLAS;

//Setting Database Connectivity
connectDatabase(MONGO_URL_LOCAL);

// Initializing Routes
app.use("/api/all", allRouter);
app.use("/api/user", userRouter);

// Testing Link
app.get("/api/test", (req, res) => {
    res.send({message: "E-Commerce Backend Server Connected Successfully"})
});

// Initializing Server
app.listen(PORT, ()=> {
    console.log(`
        Server Started Successfully,
        Listening to PORT http://localhost:${PORT}
        `);
});
