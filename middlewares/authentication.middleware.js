const jwt = require("jsonwebtoken");
const Users = require("../models/user.model");

const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) throw new Error("No token provided");

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await Users.findById(decoded._id).select("-password");
    if (!user) throw new Error("Invalid token");

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = authenticate;
