import express from "express";
import { getDetails } from "../controller/details.controller.js";

const router = express.Router();
router.get("/details/:id", getDetails);

export default router;