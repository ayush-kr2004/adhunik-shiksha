import express from "express";
import bcrypt from "bcrypt";
import { adminModel } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET } from "../config.js";
import { courseModel } from "../db.js";
import { adminMiddleware } from "../middleware/admin.js";
import { validateAdmin } from "../validation/admin.validation.js";
const adminRouter = express.Router();

adminRouter.post('/signup', validateAdmin, async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  try {
    const Admin = await adminModel.findOne({ email });
    if (Admin) {
      res.status(403).json({
        message: "admin already exists"
      })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await adminModel.create({
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

adminRouter.post('/signin', async function (req, res) {
  const { email, password, firstName, lastName } = req.body;
  try {
    const Admin = await adminModel.findOne({ email });
    if (!Admin) {
      res.status(403).json({
        message: "admin doesn't exist"
      })
    }
    const isMatch = await bcrypt.compare(password, Admin.password);
    if (!isMatch) {
      res.status(403).json({
        message: "incorrect password"
      })
    } else {
      const token = jwt.sign({
        id: Admin._id
      }, JWT_ADMIN_SECRET);
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

adminRouter.post('/course', adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, price, imageUrl } = req.body;
  try {
    const course = await courseModel.create({
      title,
      description,
      price,
      imageUrl,
      adminId
    });
    res.status(200).json({
      message: "course created",
      courseId: course._id
    })
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

adminRouter.put('/course', adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  const { title, description, price, imageUrl, courseId } = req.body;
  try {
    const course = await courseModel.updateOne({
      _id: courseId,
      adminId: adminId
    }, {
      title,
      description,
      price,
      imageUrl
    });
    res.status(200).json({
      message: "course updated",
      courseId: courseId
    })
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

adminRouter.get('/course/bulk', adminMiddleware, async function (req, res) {
  const adminId = req.adminId;
  try {
    const courses = await courseModel.find({
      adminId: adminId
    });
    res.status(200).json({
      courses
    })
  } catch (error) {
    res.status(501).json({
      error: error.message
    });
  }
})

export default adminRouter;