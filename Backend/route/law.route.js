import express from 'express';
import { getLawyer } from '../controller/lawyer.controller.js';

const router = express.Router();
router.get("/", getLawyer);

export default router;
