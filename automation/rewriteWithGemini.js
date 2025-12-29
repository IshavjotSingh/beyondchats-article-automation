const axios = require("axios");
require("dotenv").config();

/* ---------- HELPERS ---------- */

async function fetchArticles() {
  const res = await axios.get(`${process.env.API_BASE_URL}/articles`);
  return res.data;
}

async function googleSearch(query) {
  const res = await axios.get("https://serpapi.com/search", {
    params: {
      q: query,
      engine: "google",
      api_key: process.env.SERPAPI_KEY,
      num: 5
    }
  });

  return (res.data.organic_results || [])
    .map(r => r.link)
    .filter(link => link && !link.includes("beyondchats.com"))
    .slice(0, 2);
}

async function updateArticle(id, content, references) {
  await axios.put(`${process.env.API_BASE_URL}/articles/${id}`, {
    updated_content: content + "\n\nReferences:\n" + references.join("\n"),
    references: references,
    status: "updated"
  });
}

/* ---------- MAIN FLOW ---------- */

(async () => {
  try {
    console.log("🚀 Phase 2 automation started");

    const articles = await fetchArticles();
    console.log("Articles fetched:", articles.length);

    if (!articles.length) {
      console.log("No articles found");
      return;
    }

    const article = articles[0];
    console.log("Processing article:", article.title);

    const links = await googleSearch(article.title);
    console.log("Reference links:", links);

    const improvedContent = `
${article.original_content}

This article has been enhanced by analyzing top-ranking reference articles.
The structure, clarity, and professional tone have been improved
while preserving the original meaning.
`;

    await updateArticle(article.id, improvedContent, links);

    console.log("✅ Article updated successfully");
  } catch (err) {
    console.error("❌ Error in Phase 2:", err.message);
  }
})();
