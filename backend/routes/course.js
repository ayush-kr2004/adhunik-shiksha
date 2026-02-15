import express from "express";
import { purchaseModel, courseModel } from "../db.js";
import { userMiddleware } from "../middleware/user.js";
const courseRouter = express.Router();

courseRouter.post('/purchase', userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId
  })
  res.status(200).json({
    message: "purchase done"
  })

})

courseRouter.get('/preview', async function (req, res) {
  const courses = await courseModel.find({});
  res.status(200).json({
    courses: courses
  });

})

export default courseRouter;