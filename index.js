import { app } from "./app.js";
import { scrapeMetaTags } from "./scraper.js";

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // scrapeMetaTags("This is  https://facebook.com ");
  console.info(`Server started and listening on port ${PORT}`);
});
