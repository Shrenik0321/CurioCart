import { refresh, userSignIn, userSignUp, userSignOut, } from "../controllers/authController.js";
import express from "express";
const router = express.Router();
router.get("/refresh", refresh);
router.post("/sign-in", userSignIn);
router.post("/sign-up", userSignUp);
router.post("/sign-out", userSignOut);
export default router;
//# sourceMappingURL=authRoute.js.map