import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_SECRET } from "../../config/envConfig.js";
// AccessToken vs RefreshToken
// An access token is a credential that represents the authorization of a specific user to access specific resources on a server. It's a short-lived token that grants access to protected resources.
// A refresh token is a long-lived credential that allows a client to obtain a new access token without requiring the user to re-enter their credentials on page refresh.
// The refresh token is passed as an HTTP only cookie and the access token is passed as part of the response body. When the user refreshes the page, a new access token will be provided based on the refresh token which cant be accessed by browser JS.
// In summary, access tokens are short-lived credentials used to access specific resources, while refresh tokens are long-lived credentials used to obtain new access tokens without requiring the user to log in again. Both work together to provide a secure and seamless authentication process for applications.
export const requireAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization || req.headers.authorization;
        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorised" });
        }
        const token = authHeader.split(" ")[1];
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
        console.log(err);
        return res.status(401).json({ message: "Request is not authorized" });
    }
};
//# sourceMappingURL=requireAuth.js.map