import mongoose from 'mongoose';
import dotenv from 'dotenv';
const connectToMongoDB = async () => {

    try {
        await mongoose.connect(process.env.MongoDBURI, {
        });
        console.log("Connected to mongoDB atlas");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;