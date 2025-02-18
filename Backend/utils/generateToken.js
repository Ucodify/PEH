import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '90d'

    })
    res.cookie("jwt", token, {

        maxAge: 90 * 24 * 60 * 60 * 1000, //milliseconds

        httpOnly: true,
        //prevent XSS attacks cross-site scripting attacks to secure data

        sameSite: "strict",
        //mitigates CSRF(Cross-Site Request Forgery) attacks

        secure: process.env.NODE_ENV !== "development",
        //allow only developers to handle cookies without http other users will only transmit cookies on https connection
    });
};

export default generateTokenAndSetCookie;