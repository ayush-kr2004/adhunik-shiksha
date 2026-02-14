import jwt from "jsonwebtoken";
import { JWT_USER_SECRET } from "../config.js";

export function userMiddleware(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(403).json({
            message: "token not found"
        })
    }
    const decodedToken = jwt.verify(token, JWT_USER_SECRET);
    if (!decodedToken) {
        return res.status(403).json({
            message: "token not valid"
        })
    }
    req.userId = decodedToken.id;
    next();
}   