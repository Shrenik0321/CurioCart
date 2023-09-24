import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService.js";

export const userSignUp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        error: "Email, password, first name and last name are required fields",
      });
    }

    const { statusCode, message, profile } = await registerUser(
      email,
      password
    );

    res.status(statusCode).json({ message, profile });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};

export const userSignIn = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required fields" });
    }

    const { statusCode, message, token } = await loginUser(email, password);

    res.status(statusCode).json({ message, token });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", error: err });
  }
};
