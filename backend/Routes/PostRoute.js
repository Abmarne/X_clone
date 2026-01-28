import express from "express";
import { newPost, getPosts, updateLikes } from "../Controllers/PostControllers.js";

const router = express.Router();

router.post("/", newPost);
router.get("/", getPosts);
router.post("/like/:postId",updateLikes);

export default router;