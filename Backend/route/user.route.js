import express from "express";
import { login, logout, signup, getUsersForSidebar } from "../controller/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;