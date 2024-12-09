import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import HomePage from './pages/HomePage';
import FindJobs from './pages/FindJobs';
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
