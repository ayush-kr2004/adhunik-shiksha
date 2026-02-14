import jwt from "jsonwebtoken";
import { JWT_ADMIN_SECRET } from "../config.js";

export function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  if (!token) {
    return res.status(403).json({
      message: "token not found"
    })
  }
  const decodedToken = jwt.verify(token, JWT_ADMIN_SECRET);
  if (!decodedToken) {
    return res.status(403).json({
      message: "token not valid"
    })
  }
  req.adminId = decodedToken.id;
  next();
}