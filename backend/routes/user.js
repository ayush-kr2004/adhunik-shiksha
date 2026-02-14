import express from "express";
import bcrypt from "bcrypt";
import { userModel } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_USER_SECRET } from "../config.js";

const userRouter = express.Router();

userRouter.post('/signup', async function (req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
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
        token
      })
    }
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

userRouter.get('/purchases', function (req, res) {
  res.send('POST request to the homepage')
})

export default userRouter;