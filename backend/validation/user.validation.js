import { z } from "zod";

const userSchema = z.object({
    firstName: z.string().min(3, "Name must be at least 3 characters long"),
    lastName: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

export const validateUser = (req, res, next) => {
    const result = userSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            error: result.error.errors,
            message: "Invalid input"
        });
    }
    req.body = result.data;
    next();
}