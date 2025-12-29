import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container">
        <h2>Loading articles...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">BeyondChats Articles</h1>

      {articles.map((article) => (
        <div className="card" key={article.id}>
          <h2>{article.title}</h2>

          <div className="section-title">Original Article</div>
          <div className="content">{article.original_content}</div>

          {article.updated_content && (
            <>
              <div className="section-title">Updated Article</div>
              <div className="content">{article.updated_content}</div>
            </>
          )}

          {article.references && article.references.length > 0 && (
            <div className="references">
              <div className="section-title">References</div>
              <ul>
                {article.references.map((link, index) => (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <span className="badge">{article.status}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
