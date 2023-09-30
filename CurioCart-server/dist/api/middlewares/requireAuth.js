import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../../config/envConfig.js";
export const requireAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorised" });
        }
        const token = authHeader.split(" ")[1];
        // const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
        if (decoded.exp && Date.now() > decoded.exp * 1000) {
            return res
                .status(401)
                .json({ error: "Token expired, please log in again" });
        }
        req.body.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Request is not authorized" });
    }
};
//# sourceMappingURL=requireAuth.js.map