const axios = require("axios");
require("dotenv").config();

async function searchGoogle(query) {
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: {
        q: query,
        api_key: process.env.SERPAPI_KEY,
        engine: "google",
        num: 5
      }
    });

    const results = response.data.organic_results || [];

    const links = results
      .map(r => r.link)
      .filter(link => link && !link.includes("beyondchats.com"))
      .slice(0, 2);

    console.log("Top 2 external links:");
    console.log(links);
  } catch (error) {
    console.error("Google search error:", error.message);
  }
}

searchGoogle("Test Article");
