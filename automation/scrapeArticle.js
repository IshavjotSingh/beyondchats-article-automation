const axios = require("axios");
const { JSDOM } = require("jsdom");
const { Readability } = require("@mozilla/readability");

async function scrapeArticle(url) {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const dom = new JSDOM(response.data, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      console.log("Could not extract article from:", url);
      return null;
    }

    return {
      title: article.title,
      content: article.textContent
    };
  } catch (error) {
    console.error("Scraping error:", error.message);
    return null;
  }
}

// 🔽 TEST WITH ONE URL
(async () => {
  const testUrl = "https://en.wikipedia.org/wiki/Test_article";
  const result = await scrapeArticle(testUrl);

  if (result) {
    console.log("Article Title:", result.title);
    console.log("Article Content (first 500 chars):");
    console.log(result.content.slice(0, 500));
  }
})();
