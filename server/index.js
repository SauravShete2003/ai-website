import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log("MongoDB Connected✅");
    }
  };
  connectDB();

// Define a Schema for Articles/Blogs
const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String, 
  date: { type: Date, default: Date.now }
});

const Article = mongoose.model('Article', articleSchema);

// API Routes
app.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/articles', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category
  });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));