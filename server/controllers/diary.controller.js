import { sendError, sendSuccess } from "../utils/responseHandler.js";
import Diary from "../models/Diary.model.js";

export const diaryContentCreator = async (req, res, next) => {
  try {
    const { title, content, location } = req.body;
    if (!title || !content)
      return sendError(
        res,
        400,
        "please fill the title and thought content to create one :)"
      );

    const createdPage = await Diary.create({
      title,
      content,
      location,
    });
    sendSuccess(res,201,"page created successfully",createdPage)
  } catch (err) {
    next(err);
  }
};
