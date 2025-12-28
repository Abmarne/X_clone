import express from "express"
import PostRoute from "./Routes/PostRoute.js";

const app = express();

app.use("/api/post", PostRoute);

app.listen(5173, () =>{
    console.log("Server started on PORT: 5173")
})