import { Profile, ProfileType } from "../models/ProfileModel.js";
import { JWT_SECRET } from "../../config/envConfig.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (
  email: string,
  password: string
): Promise<{
  statusCode: number;
  message: string;
  profile?: ProfileType | null;
}> => {
  try {
    const existingProfile = await Profile.find({ email: email });
    if (existingProfile.length != 0) {
      return { statusCode: 409, message: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newProfile = new Profile({
      email: email,
      password: hashedPassword,
    });

    const addedProfile = await newProfile.save();

    return {
      statusCode: 201,
      message: "Registration successful",
      profile: addedProfile,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<{
  statusCode: number;
  message: string;
  token?: string;
}> => {
  try {
    const existingProfile = await Profile.find({ email: email });

    if (existingProfile.length === 0) {
      return { statusCode: 401, message: "Email doesn't exist, SignUp" };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingProfile[0].password
    );

    if (!passwordMatch) {
      return { statusCode: 401, message: "Invalid email or password" };
    }

    const { _id } = existingProfile[0];
    const userId = _id.toString();

    const token = jwt.sign({ userId: userId }, JWT_SECRET ?? "", {
      expiresIn: "10h",
    });

    return {
      statusCode: 201,
      message: "Login successful",
      token,
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, message: "Internal server error" };
  }
};
