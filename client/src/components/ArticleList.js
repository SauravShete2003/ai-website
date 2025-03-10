import React, { useEffect, useState } from 'react';
import api from './api';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    api.get(`/api/articles`)
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="article-list container">
      <h2>Latest AI Articles</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article._id} className="article-card">
            <div className="card-header">
              <span className={`category-tag ${article.category.toLowerCase()}`}>
                {article.category}
              </span>
              <span className="date">
                {new Date(article.date).toLocaleDateString()}
              </span>
            </div>
            <h3>{article.title}</h3>
            <p style={{fontWeight: "600"}}>{article.content.substring(0, 130)}...</p>
            <Link to={`/article/${article._id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;