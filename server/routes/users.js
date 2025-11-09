import express from "express";
const router = express.Router();

import { verifyAuth } from "../middlewares/verifyAuth.js";
import { sendSuccess } from "../utils/responseHandler.js";
import { signupUser,loginUser,logoutUser } from "../controllers/auth.controller.js";

// GET /users
router.get("/", (req, res) => {
  res.json({ message: "user route working", users: [] }); // static response abhi ke liye
});

router.get("/verifyUser", verifyAuth, (req, res) => {
  return sendSuccess(res, 200, "User verified", req.user);
});

router.post("/signup", async (req, res, next) => {
  await signupUser(req, res, next);
});
router.post("/login", async (req, res, next) => {
  await loginUser(req, res, next);
});
router.post("/logout", async (req, res, next) => {
  await logoutUser(req, res, next);
});

export default router;
