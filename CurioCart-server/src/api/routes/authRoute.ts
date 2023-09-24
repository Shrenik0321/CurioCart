import { userSignIn, userSignUp } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/sign-in", userSignIn);
router.post("/sign-up", userSignUp);

export default router;
