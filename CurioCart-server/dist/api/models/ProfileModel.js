import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String },
    profilePic: { type: String },
});
export const Profile = mongoose.model("Profile", profileSchema);
//# sourceMappingURL=ProfileModel.js.map