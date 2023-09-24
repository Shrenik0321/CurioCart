import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/envConfig.js";
export const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if (decoded.exp && Date.now() > decoded.exp * 1000) {
            return res
                .status(401)
                .json({ error: "Token expired, please log in again" });
        }
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Request is not authorized" });
    }
};
//# sourceMappingURL=requireAuth.js.map