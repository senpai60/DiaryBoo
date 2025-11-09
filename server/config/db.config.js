import mongoose from "mongoose";
import { logger } from "../utils/logger.js";
import { ENV_CONFIG } from "../config/env.config.js";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connected successfully🥬");
  } catch (err) {
    logger.error("error in connecting MongoDB", err);
  }
};
