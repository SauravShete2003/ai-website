import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/articles/${id}`)
      .then(res => setArticle(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-detail container">
      <div className="article-header">
        <span className={`category-tag ${article.category.toLowerCase()}`}>
          {article.category}
        </span>
        <h1>{article.title}</h1>
        <p className="date">
          Published on: {new Date(article.date).toLocaleDateString()}
        </p>
      </div>
      <div className="article-content">
        <p>{article.content}</p>
      </div>
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ArticleDetail;