import "./env.js";
import { adminMiddleware } from "./middleware/admin.js";

console.log("Type of adminMiddleware:", typeof adminMiddleware);
console.log("Value of adminMiddleware:", adminMiddleware);

if (typeof adminMiddleware !== 'function') {
    console.error("adminMiddleware is NOT a function!");
    process.exit(1);
} else {
    console.log("adminMiddleware is a function.");
    process.exit(0);
}
