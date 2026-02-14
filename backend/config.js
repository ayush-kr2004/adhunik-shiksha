const JWT_USER_SECRET = process.env.JWT_USER_SECRET;
if (!JWT_USER_SECRET) {
  throw new Error("JWT_USER_SECRET not defined");
}
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET;
if (!JWT_ADMIN_SECRET) {
  throw new Error("JWT_ADMIN_SECRET not defined");
}

export { JWT_USER_SECRET, JWT_ADMIN_SECRET };


