import passport from "passport";
export const googleRequireAuth = async (req, res, next) => {
    passport.authenticate("google", { scope: ["profile"] })(req, res, next);
};
//# sourceMappingURL=googleRequireAuth.js.map