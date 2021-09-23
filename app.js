import cors from "cors";
import express from "express";
import { config } from "dotenv";
import { router } from "./routes/index.js";

config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? process.env.ALLOWED_DEV
        : process.env.ALLOWED,
  })
);

app.use(express.json());
app.use("/", router);
export { app };
