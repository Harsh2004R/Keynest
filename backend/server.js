import app from "./src/app.js";
import dotenv from "dotenv";
import dataBaseConnection from "./config/data_base.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    console.log(
      `Server running on port ${PORT}, url: http://localhost:${PORT}`
    );
    await dataBaseConnection;
    console.log("connected to Data Base");
  } catch (error) {
    console.log("<<<----------------------......Killed Server.....-------------------->>>");
  }
});
