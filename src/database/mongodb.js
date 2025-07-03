import mongoose from "mongoose";
import { NODE_ENV, DATABASE_URL } from "../config/app.config.js";

if (!DATABASE_URL) {
  throw new Error("Mongo URI is missing. Check your environment variables");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log(`Connected to Database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
