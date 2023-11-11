import { NextFunction, Request, Response } from "express";
import passport from "passport";

export const googleRequireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("google", { scope: ["profile"] })(req, res, next);
};
