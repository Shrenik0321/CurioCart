import { registerUser, loginUser, refreshService, } from "../services/authService.js";
export const refresh = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            return res.status(401).json({ error: "Unauthorised" });
        }
        const refreshToken = cookies.jwt;
        const { statusCode, accessToken, authStatus } = await refreshService(refreshToken);
        return res.status(statusCode).json({ accessToken, authStatus });
    }
    catch (err) {
        return res
            .status(500)
            .json({ message: "Internal server error", error: err });
    }
};
export const userSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                error: "Email, password, first name and last name are required fields",
            });
        }
        else {
            const { statusCode, message, profile } = await registerUser(email, password);
            return res.status(statusCode).json({ message, profile });
        }
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error", error: err });
    }
};
export const userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required fields" });
        }
        else {
            const { statusCode, message, refreshToken, accessToken, authStatus } = await loginUser(email, password);
            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 24 * 60 * 60 * 1000,
            });
            return res.status(statusCode).json({ accessToken, message, authStatus });
        }
    }
    catch (err) {
        console.log(err);
        return res
            .status(500)
            .json({ message: "Internal server error", error: err });
    }
};
export const userSignOut = async (req, res) => {
    try {
        const cookies = req.cookies;
        if (!cookies?.jwt) {
            return res.sendStatus(204);
        }
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ message: "Internal server error", error: err });
    }
};
//# sourceMappingURL=authController.js.map