const axios = require("axios");
require("dotenv").config();

async function fetchArticles() {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/articles`
    );

    console.log("Articles fetched successfully:");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching articles:", error.message);
  }
}

fetchArticles();
