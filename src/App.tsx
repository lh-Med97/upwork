import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar.tsx';
import HomePage from './pages/HomePage.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes will be added later */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
