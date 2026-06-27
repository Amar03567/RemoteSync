import mongoose from "mongoose";

async function connectDB() {
  try {
    // connection to database
    const connectionInstance = await mongoose.connect(
  process.env.MONGO_URL
 );
    console.log("MongoDB connected😊");
    console.log("Connection Instance: ", connectionInstance.connection.host);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default connectDB;
