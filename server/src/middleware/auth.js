// server/src/middleware/auth.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/**
 * Protect routes by validating JWT
 */
export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

/**
 * Role-based access middleware
 * Example: allow only Teacher
 */
export const teacherOnly = (req, res, next) => {
  if (!req.user || req.user.role !== "Teacher") {
    return res.status(403).json({ message: "Access forbidden: Teacher only" });
  }
  next();
};

/**
 * Optional: Role-based middleware generator
 * Usage: allowRoles("Teacher", "Admin")
 */
// export const allowRoles = (...roles) => {
//   return (req, res, next) => {
//     if (!req.user || !roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: "Access forbidden: insufficient role" });
//     }
//     next();
//   };
// };
