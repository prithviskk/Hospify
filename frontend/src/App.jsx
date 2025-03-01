import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage.jsx";
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
