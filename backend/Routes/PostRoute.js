import express from "express";
import { newPost, getPosts } from "../Controllers/PostControllers.js";

const router = express.Router();

router.post("/", newPost);
router.get("/", getPosts);

export default router;