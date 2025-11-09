import { sendError, sendSuccess } from "../utils/responseHandler.js";
import Diary from "../models/Diary.model.js";

export const diaryContentCreator = async (req, user, res, next) => {
    console.log("User at diary create:", user)
  try {
    const { title, content, location } = req.body;
    if (!title || !content)
      return sendError(
        res,
        400,
        "please fill the title and thought content to create one :)"
      );

    const createdPage = await Diary.create({
      user: user.userId,
      title,
      content,
      location,
    });
    sendSuccess(res, 201, "page created successfully", createdPage);
  } catch (err) {
    next(err);
  }
};

export const getAllDiaryEntries = async (req, user, res, next) => {
  try {
    if (!user) return sendError(res, 401, "please login");
    const diaryEntries = await Diary.find({ user: user.userId }).lean();
    sendSuccess(res, 201, "OK", diaryEntries);
  } catch (err) {
    next(err);
  }
};
