import express from "express";
const router = express.Router();
import upload from "../middleware/uploadImages";
import {
  postController,
  uploadImageController,
  commentController,
} from "../controller";
// import { createPost } from "../controller/postController";
// router.get("/", postController.testing);
router.post("/createPost", postController.createPost);
router.get("/posts", postController.readPost);
router.get("/posts/:id", postController.readPost);
router.post(
  "/file/upload",
  upload.single("file"),
  uploadImageController.uploadImage
);
router.get("/file/:filename", uploadImageController.getImage);
router.post("/updateposts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);
// comment controller
router.post("/comment/new", commentController.newComment);
router.get("/comment/:id", commentController.getComment);
router.delete("/comment/:id", commentController.deleteComment);
export default router;
