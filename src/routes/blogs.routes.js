import { Router } from "express";
import {
  createBlog,
  getAllBlogs,
  getBlog,
} from "../controllers/blog.controller.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);

export default router;
