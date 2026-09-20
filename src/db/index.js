import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("Missing MONGO_URI in .env");
        }

        const connectionInstance = await mongoose.connect(mongoUri, {
            dbName: DB_NAME,
        });
        console.log("MongoDB connected successfully", connectionInstance.connection.host, connectionInstance.connection.name);
        app.on("error", (err) => {
            console.log("Application unable to talk to DB ERROR :", err);
            throw err;
        });

        const port = Number(process.env.PORT || 8000);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch(error) {
        console.log("MongoDB connection ERROR :", error);
        process.exit(1);
    }
}

export { connectDB };