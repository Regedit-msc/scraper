import { Router } from "express";
import { scrapeMetaTags } from "../scraper.js";
const router = Router();
router.post("/scrape", (req, res, next) => {
  const { text } = req.body;
  const data = scrapeMetaTags(text);
  res.status(200).json({ message: data ?? {}, success: true });
});

export { router };
