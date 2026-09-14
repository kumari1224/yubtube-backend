import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`, {
            dbName: DB_NAME,
        });
        app.on("error", (err) => {
            console.log("Application unable to talk to DB ERROR :", err);
            throw err;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch(error) {
        console.log("ERROR :", error);
        throw error;
    }
})()

