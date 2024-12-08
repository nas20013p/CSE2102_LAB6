import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz.js'; 
import AboutPage from './pages/AboutPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation Links */}
          <nav>
          <a href="/" style={{ color: 'red', textDecoration: 'none' }}>Home</a> | 
          <a href="/about" style={{ color: 'red', textDecoration: 'none' }}> About</a>
          </nav>

          {/* Route Configuration */}
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

