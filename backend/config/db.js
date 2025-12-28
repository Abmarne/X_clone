import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:5173/x-clone',{});

        console.log('MongoDB connected!');
    }
    catch (error){
        console.error('Error connecting');
        process.exit(1);
    }
}

export default connectDB;