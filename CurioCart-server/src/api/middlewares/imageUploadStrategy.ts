import { NextFunction, Request, Response } from "express-serve-static-core";
import multer from "multer";

// setting up upload strategy
const inMemoryStorage = multer.memoryStorage();
export const uploadStrategy = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const upload = multer({ storage: inMemoryStorage }).single("itemImageUrl");

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: "File upload error", error: err });
    } else if (err) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: err });
    }
    next();
  });
};
