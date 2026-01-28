import Post from '../Models/Post.js';

export async function newPost(req, res) {
    console.log("New post request received:", req.body);
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

export async function getPosts(req, res) {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    }
    catch (error) {
        console.error("Error fetching posts.", error);
        res.status(500).json({ success: false, message: "Internal Server Error." });
    }
}

// ✅ New controller to handle liking a post
export async function likePost(req, res) {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        post.likes += 1;
        await post.save();

        res.status(200).json({
            success: true,
            message: "Post liked successfully",
            likes: post.likes
        });
    } catch (error) {
        console.error("Error liking the post:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}