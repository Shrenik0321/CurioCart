import { userSignIn, userSignUp, userSignOut, } from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.post("/sign-in", userSignIn);
router.post("/sign-up", userSignUp);
router.get("/sign-out", userSignOut);
export default router;
//# sourceMappingURL=authRoute.js.map