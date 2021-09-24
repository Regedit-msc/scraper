import { Router } from "express";
import { scrapeMetaTags } from "../scraper.js";
const router = Router();
router.post("/scrape", async (req, res, next) => {
  const { text } = req.body;
  const data = await scrapeMetaTags(text);
  console.log(data);
  res.status(200).json({ message: data ?? {}, success: true });
});

export { router };
