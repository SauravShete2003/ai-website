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
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="article-detail">
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
        <p>
          <strong>Key Takeaways:</strong>
          <ul>
            <li>AI is transforming industries with tools like ChatGPT and MidJourney.</li>
            <li>GPT-4 offers improved reasoning and multimodal capabilities.</li>
            <li>AI-powered drug discovery is accelerating medical breakthroughs.</li>
          </ul>
        </p>
        <blockquote>
          "The future of AI is not just about technology; it's about how we use it to solve real-world problems."
        </blockquote>
        <p>
          For more information, visit <a href="https://openai.com">OpenAI's website</a>.
        </p>
      </div>
      <Link to="/" className="back-btn">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ArticleDetail;