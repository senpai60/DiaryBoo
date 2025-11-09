import express from "express";
const router = express.Router();

import { signupUser } from "../controllers/auth.controller.js";

// GET /users
router.get("/", (req, res) => {
  res.json({ message:"user route working",users: [] }); // static response abhi ke liye
});

router.post("/signup", async (req, res, next) => {
  await signupUser(req, res, next);
});

export default router;
