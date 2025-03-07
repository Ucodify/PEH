import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        minlength: 6
    },
    option: {
        type: String,
        required: true,
        enum: ["lawyer", "client"]
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePicture: {
        type: String,
        default: "",
    },
    //createdAt, updatedAt
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;