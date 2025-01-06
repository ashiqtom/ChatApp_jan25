import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw new Error("Could not Connect To MongoDB");
  }
};
