import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      index: true, // indexing for faster queries
    },
    phone: {
      type: String,
      minlength: 8,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false, // 🚀 never return password in queries by default
    },
    role: {
      type: String,
      enum: ["user", "pro", "admin"],
      default: "user",
    },
    avatar: {
      type: String, // Cloudinary URL or local path
      default: "https://default-avatar-url.com/avatar.png",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("user", userSchema);
