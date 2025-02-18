import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';
import lawRoute from "./route/law.route.js";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/message.route.js";
import detailRoute from './route/law.route.js';
// import authRoutes from './route/user.route.js';
import User from './model/user.model.js';
import Law from './model/lawyer.model.js';
import Message from './model/message.model.js';
import { app, server } from './socket/socket.js';
import path from "path";

dotenv.config();

//Middleware
app.use(cookieParser()); //to parse the incoming cookies

app.use(cors()); //to allow cross-origin requests

app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)


//api to get data 
app.get('/api/data', async (req, res) => {
    try {
        //To fetch data
        const users = await User.find();
        const lawyers = await Law.find();
        const messages = await Message.find();
        //To combine data
        const Data = {
            users,
            lawyers,
            messages,
        };
        // Fetch data from MongoDB
        res.status(200).json(Data); // Send it as JSON
    } catch (error) {
        res.status(500).json({ message: 'Server error in syncing data', error });
    }
});

const CHATBOTKEY = process.env.OPENAI_API_KEY;
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
const __dirname = path.resolve();
//Connect to mongoDB compass GUI
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB compass GUI");
} catch (error) {
    console.log("Error:", error)
}


//Defining Routes
// app.use("/api/auth", authRoutes)
app.use("/lawyer", lawRoute);
app.use("/user", userRoute);
app.use("/details", detailRoute);
app.use("/message", messageRoute);
app.use(express.static(path.join(__dirname, "/Frontend/Frontend/dist")))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend/Frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is listening on port ${PORT}`);
});
