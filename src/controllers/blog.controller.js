import mongoose from "mongoose";
import Blog from "../models/blogs.models.js";
import {
  successDataResponse,
  errorServerResponse,
  successMessageResponse,
} from "../handlers/respones.handler.js";

export const getBlog = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();
    return successDataResponse(res, blog);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error fetching blog:", error);
    return errorServerResponse(res, "Error Fetching blog", 500);
  }
};

export const getAllBlogs = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const blogs = await Blog.find();

    session.commitTransaction();
    session.endSession();
    return successDataResponse(res, blogs);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Error fetching blogs:", error);
    return errorServerResponse(res, "Error Fetching blogs", 500);
  }
};

export const createBlog = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const newBlog = new Blog(req.body);
    await newBlog.save();

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();
    return successDataResponse(res, newBlog, 201);
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error creating blog:", error);

    res.status(500).json({ message: "Internal server error" });
  }
};
