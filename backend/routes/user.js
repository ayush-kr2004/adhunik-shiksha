import express from "express";
import bcrypt from "bcrypt";
import { userModel, courseModel, purchaseModel } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_USER_SECRET } from "../config.js";
import { userMiddleware } from "../middleware/user.js";
import { validateUser } from "../validation/user.validation.js";

const userRouter = express.Router();

userRouter.post('/signup', validateUser, async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const User = await userModel.findOne({ email });
    if (User) {
      res.status(409).json({
        message: "user already exists"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await userModel.create({
      email,
      password: hashedPassword,
      firstName,
      lastName
    });
    res.json({
      message: "signup done"
    })
  } catch (error) {
    res.status(501).json({ error: error.message })
  }
});

userRouter.post('/signin', async function (req, res) {
  const { email, password } = req.body;

  try {
    const User = await userModel.findOne({ email });

    if (!User) {
      res.status(403).json({
        message: "user doesn't exist"
      })
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      res.status(403).json({
        message: "incorrect password"
      })
    } else {
      const token = jwt.sign({
        id: User._id
      }, JWT_USER_SECRET);
      res.status(200).json({
        message: "signin done",
        token: token
      })
    }
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

userRouter.get("/purcheses", userMiddleware, async function (req, res) {
  const userId = req.userId;

  try {
    const purchases = await purchaseModel.find({
      userId: userId,
    });

    // Check the length of the array instead of checking if it exists
    if (purchases.length === 0) {
      return res.status(404).json({
        message: "No purchases found",
      });
    }

    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId);

    const coursesData = await courseModel.find({
      _id: { $in: purchasesCourseIds },
    });

    res.status(200).json({
      purchases,
      coursesData,
    });
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

export default userRouter;