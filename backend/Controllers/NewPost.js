import Post from '../Models/Post.js';

export async function newPost(req, res) {
    try {
        const { content } = req.body;

        if (!content || content.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Post cannot be empty!"
            });
        }

        const newPost = new Post({
            content: content.trim()
        });

        const savedPost = await newPost.save();

        res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: savedPost
        });
    } catch (error) {
        console.error("Error creating the post:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server error"
        });
    }
}