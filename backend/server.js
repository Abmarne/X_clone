import express from "express"
import PostRoute from "./Routes/PostRoute.js";
import cors from "cors"

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/x/post", PostRoute);

app.listen(5173, () =>{
    console.log("Server started on PORT: 5173")
})