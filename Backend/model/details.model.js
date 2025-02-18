import mongoose from "mongoose";

const detailSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
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
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Senior Advocate", "Advocate", "Junior Advocate"],
    },
    description: {
        type: String,
        Required: true
    },
    //createdAt, updatedAt
}, { timestamps: true });


const Details = mongoose.model("Details", detailSchema);

export default Details;