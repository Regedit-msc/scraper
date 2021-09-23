import getUrls from "get-urls";
import cheerio from "cheerio";
import fetch from "node-fetch";
const scrapeMetaTags = (text) => {
  const urls = Array.from(getUrls(text));
  const requests = urls.map(async (url) => {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const getMetatag = (name) =>
      $(`meta[name=${name}]`).attr("content") ||
      $(`meta[property="og:${name}"]`).attr("content") ||
      $(`meta[property="twitter:${name}"]`).attr("content");
    console.log({
      url,
      title: $("title").text(),
      favicon:
        $('link[rel="shortcut icon"]').attr("href") ||
        $('link[rel="apple-touch-icon"]').attr("href") ||
        $("link[rel='icon']").attr("href"),
      description: getMetatag("description"),
      image: getMetatag("image"),
      author: getMetatag("author"),
    });
    return {
      url,
      title: $("title").text(),
      favicon:
        $('link[rel="shortcut icon"]').attr("href") ||
        $('link[rel="apple-touch-icon"]').attr("href") ||
        $("link[rel='icon']").attr("href"),
      description: getMetatag("description"),
      image: getMetatag("image"),
      author: getMetatag("author"),
    };
  });

  return Promise.all(requests);
};
export { scrapeMetaTags };
