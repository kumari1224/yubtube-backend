import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes/index.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
})); // @TODO: Explore

app.use(express.json({ limit: '16kb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '16kb' })); // Understand URL-encoded data
app.use(express.static('public')); // Serve static files from the "public" directory
app.use(cookieParser()); // Parse cookies from incoming requests

// Connect to MongoDB

export { app };

