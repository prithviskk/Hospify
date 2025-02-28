import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  return (
      <div className="bg-amber-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      </div>
  );
};

export default App;
