import { sendSuccess, sendError } from "../utils/responseHandler.js";
import { setCookies } from "../utils/setCookies.utils.js";
import { generateToken } from "../utils/generateToken.utils.js";

import User from "../models/User.model.js";

export const signupUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
     return sendError(res, 409, "all fields are required");
    const existingUser = await User.find({ email });
    if (existingUser) return sendError(res, 402, "user already exists");
    const newUser = await User.create({
      username,
      email,
      password,
    });
    const token = generateToken(newUser);
    setCookies(res,token);
    return sendSuccess(res, 201, "user created successfully", newUser);
  } catch (err) {
    next(err);
  }
};
