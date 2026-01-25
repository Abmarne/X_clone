import express from "express";
import { newPost } from "../Controllers/NewPost.js";

const router = express.Router();

router.post("/", newPost);

export default router;