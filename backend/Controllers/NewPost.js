export async function newPost(req,res){
    try{
        const {content} = req.body;

        if(!content || content.trim() === ""){
            return res.status(400).json({
                success:false,
                message: "Post cannot be empty!"
            });
        }

        const newPost = new Post({
            content: content.trim();
        });

        const savedPost = await newPost.save();

        res.status(201).json({
            success: true,
            messagae: "Post created successfully",
            post: savedPost
        });
    }
    catch(error){
        console.error("Error creating the post:",error);

        res.status(500).json({
            success:false,
            messagae:"Internal Server error"
        });
    }
};

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 }) // Newest first
            .populate('author', 'username') // Populate author if you have User model
            .exec();

        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

export default router;