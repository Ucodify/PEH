import User from "../model/user.model.js";
// import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
//import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {

        const { fullname, email, password, confirmPassword, option, gender } = req.body;

        // Confirm password
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        //Check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        //Hash password here
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);


        const maleclientProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullname}`;
        const femaleclientProfilePic = `https://avatar.iran.liara.run/public/girl?username=${fullname}`;

        const createdUser = new User({
            fullname,
            email,
            password: hashPassword,
            option,
            gender,
            profilePic: gender === "male" ? maleclientProfilePic : femaleclientProfilePic,
        })



        if (createdUser) {
            //generate JWT token here
            generateTokenAndSetCookie(createdUser._id, res);

            await createdUser.save();

            res.status(201).json({
                message: "User created successfully", user: {
                    _id: createdUser._id,
                    fullname: createdUser.fullname,
                    email: createdUser.email,
                    profilePic: createdUser.profilePic,
                }
            });

        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user?.password || "");

        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            //# message: "Login successful", user: {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            profilePic: user.profilePic,
            //}
        })

    }
    catch (error) {
        console.log("Error in login controller: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Log out successful" });

    } catch (error) {
        console.log("Error in logout controller: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredloggedinUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredloggedinUsers);

    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}