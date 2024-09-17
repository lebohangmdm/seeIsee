import mongoose, { ConnectOptions } from "mongoose";

// Function to establish connection
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    await mongoose.connect(
      MONGO_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("DB connection successful");

    // Handle graceful shutdown
    const gracefulShutdown = async () => {
      console.log("Closing MongoDB connection...");
      await mongoose.disconnect();
      console.log("MongoDB connection closed");
      process.exit(0);
    };

    process.on("SIGINT", gracefulShutdown); // Handle Ctrl+C
    process.on("SIGTERM", gracefulShutdown); // Handle termination signal
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
