import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './api';
const AddArticle = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Tutorials'
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/api/articles", formData)
      .then(() => {
        alert('Article added successfully!');
        navigate('/');
      })
      .catch(err => console.error(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-article container">
      <h2>Add New Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Content (HTML format):</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            placeholder="Example: <p>This is a paragraph.</p><ul><li>List item 1</li><li>List item 2</li></ul>"
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Tutorials">Tutorials</option>
            <option value="News">News</option>
            <option value="Reviews">Reviews</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Publish Article</button>
      </form>
    </div>
  );
};

export default AddArticle;