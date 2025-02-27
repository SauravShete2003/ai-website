import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL }/api/articles`)
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
            <p>{article.content.substring(0, 150)}...</p>
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