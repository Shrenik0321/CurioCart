import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import {
  ACCESS_TOKEN_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from "./envConfig.js";
import type { Request } from "express";
import { Profile } from "../api/models/ProfileModel.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: ACCESS_TOKEN_SECRET,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const profile = await Profile.findOne({
      _id: payload.ProfileInfo.profileId,
    });

    if (!profile) {
      done(null, false);
    } else {
      done(null, profile);
    }
  } catch (error) {
    done(error, false);
  }
});

const googleOptions = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://www.example.com/auth/google/callback",
};

const googleAuthStrategy = new GoogleStrategy(
  googleOptions,
  async (accessToken, refreshToken, profile, cb) => {
    try {
      console.log("here 2");
      console.log(profile);
    } catch (error) {
      console.log(error);
    }
  }
);

passport.use("jwt", jwtStrategy);
passport.use("google", googleAuthStrategy);

export default passport;
