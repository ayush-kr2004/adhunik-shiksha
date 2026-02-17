import "./env.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import adminRouter from "./routes/admin.js";
import courseRouter from "./routes/course.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter)


async function main() {
  await mongoose.connect(process.env.MONGO_URI)
  app.listen(3000);
  console.log("app is listening on port no 3000");
}
main();