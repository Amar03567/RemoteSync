import server from "./app.js";
import connectDB from "./db/connection.js";

// 1. Define a fallback port (Render will inject process.env.PORT automatically)
const PORT = process.env.PORT || 8000;

(async () => {
  try {
    await connectDB();
    
    server.on("error", (err) => console.log("Server Error: ", err));
    
    // 2. Use the new PORT variable here
    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT} 🚀`);
    });
    
  } catch (error) {
    console.log("MongoDB connection failed: ", error);
    process.exit(1);
  }
})();