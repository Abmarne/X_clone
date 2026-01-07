import express from "express";
import { newPost } from "../Controllers/NewPost";

const router = express.Router();

router.post("/", newPost);

export default router;