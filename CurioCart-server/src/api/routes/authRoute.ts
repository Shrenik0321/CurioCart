import {
  refresh,
  userSignIn,
  userSignUp,
  userSignOut,
} from "../controllers/authController.js";
import express from "express";
import { googleRequireAuth } from "../middlewares/googleRequireAuth.js";
import passport from "passport";

const authRouter = express.Router();
const CLIENT_URL = "http://localhost:5173/overview";

authRouter.get("/refresh", refresh);
authRouter.post("/sign-in", userSignIn);
authRouter.post("/sign-up", userSignUp);
authRouter.post("/sign-out", userSignOut);
authRouter.get("/google-login", googleRequireAuth);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/auth/login/failed",
  })
);
authRouter.get("/google-login/success", (req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ success: true, message: "Successful", user: req.user });
  }
});
authRouter.get("/google-login/failed", (req, res) => {
  res.status(401).json({ success: false, message: "Failure" });
});

export default authRouter;
