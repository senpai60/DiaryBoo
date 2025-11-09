import { sendSuccess, sendError } from "../utils/responseHandler.js";
import { setCookies } from "../utils/setCookies.utils.js";
import { generateToken } from "../utils/generateToken.utils.js";

import User from "../models/User.model.js";

export const signupUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return sendError(res, 400, "all fields are required");

    const existingUser = await User.findOne({ email }); // Use findOne!
    if (existingUser) return sendError(res, 409, "user already exists");

    const newUser = await User.create({
      username,
      email,
      password,
    });

    const token = generateToken(newUser);
    setCookies(res, token);
    return sendSuccess(res, 201, "user created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return sendError(res, 400, "all fields are required!");

    const user = await User.findOne({ email });
    if (!user) return sendError(res, 404, "user not found!");

    // Use schema method for password match
    const isMatch = await user.matchPassword(password);
    if (!isMatch) return sendError(res, 401, "invalid credentials!");

    const token = generateToken(user);
    setCookies(res, token);

    const safeUser = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    return sendSuccess(res, 200, "login successful", safeUser);
  } catch (err) {
    next(err);
  }
};

export const logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return sendSuccess(res, 200, "logout successful");
  } catch (err) {
    next(err);
  }
};
