import jwt from "jsonwebtoken";
import { sendError } from "../utils/responseHandler.js";
import { ENV_CONFIG } from "../config/env.config.js";

export const verifyAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return sendError(res, 401, "token not found");
    const decoded = jwt.verify(token, ENV_CONFIG.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return sendError(res, 401, "Invalid or expired token");
  }
};
