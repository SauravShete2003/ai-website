// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import AddArticle from './components/AddArticle';
import ArticleDetail from './components/ArticleDetail'; // Import the new component
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/add" element={<AddArticle />} />
            <Route path="/article/:id" element={<ArticleDetail />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;