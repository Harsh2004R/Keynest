import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DATA_BASE_URL = process.env.DATA_BASE_URL;
// const dataBaseConnection = mongoose.connect(DATA_BASE_URL);
const dataBaseConnection = mongoose
  .connect(DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to DB"))
  .catch((err) => {
    console.error("❌ DB Connection Failed", err);
    process.exit(1); 
  });
export default dataBaseConnection;
