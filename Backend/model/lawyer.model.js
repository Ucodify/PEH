import mongoose from "mongoose";

const lawyerSchema = mongoose.Schema({
    fullname: {
        type: String,
        Required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePicture: {
        type: String,
        default: "",
    },
    title: {
        type: String,
        Required: true
    },
    fee: {
        type: String,
        Required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Senior Advocate", "Advocate", "Junior Advocate"],
    },
    //createdAt, updatedAt
}, { timestamps: true });

const Law = mongoose.model("Law", lawyerSchema);

export default Law;