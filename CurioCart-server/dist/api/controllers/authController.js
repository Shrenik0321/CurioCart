import { registerUser, loginUser } from "../services/authService.js";
export const userSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                error: "Email, password, first name and last name are required fields",
            });
        }
        else {
            const { statusCode, message, profile } = await registerUser(email, password);
            res.status(statusCode).json({ message, profile });
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
            const { statusCode, message, token } = await loginUser(email, password);
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                secure: false,
            });
            res.status(statusCode).json({ message });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error", error: err });
    }
};
export const userSignOut = async (req, res) => {
    try {
        res.clearCookie("jwt", { httpOnly: true });
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error", error: err });
    }
};
//# sourceMappingURL=authController.js.map