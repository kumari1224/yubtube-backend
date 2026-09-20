import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: "./.env"
});

const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    });
