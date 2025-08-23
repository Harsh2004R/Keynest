import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import userRouter from "./routes/user.routes.js";





const app = express();
app.use(cors());
app.use(helmet()); // secure headers
app.use(morgan("tiny")); // logging
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 70, // limit requests
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({ msg: "server is working..." });
});
app.use('/api/V1/user',userRouter)

export default app;
