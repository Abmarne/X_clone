import express from "express"
import PostRoute from "./Routes/PostRoute.js";
import cors from "cors"
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
    try {
        await connectDB();

        const app = express();

        app.use(cors());
        app.use(express.json());

        app.use("/x/post", PostRoute);

        const PORT = process.env.PORT || 3000;

        app.listen(PORT, () => {
            console.log(`Server started on PORT: ${PORT}`)
        })
    } catch (error) {
        console.error("Critical server failure:", error);
    }
}

startServer();