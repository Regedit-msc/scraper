import cors from "cors";
import express from "express";
import { config } from "dotenv";
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
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.info(`Server started and lietening on port ${PORT}`);
});
