import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ msg: "Unauthorized user credentials" });
    }
    const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({
      message: "Login successful",
      user: {
        userId: user._id,
        email: user.email,
        role: user.role,
        profile: user.avatar,
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signupController = async (req, res) => {
  const { email, phone, password } = req.body;
  const existingUser = await userModel.findOne({ $or: [{ email }, { phone }] });
  if (existingUser) {
    res
      .status(401)
      .json({ message: `${email} or ${phone} User Already Exists` });
  }
  try {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new userModel({ email, phone, password: hashed });
    await newUser.save();
    res.status(200).json({ msg: "New User Created", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
