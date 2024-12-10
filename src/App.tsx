import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import HomePage from './pages/HomePage';
import FindJobs from './pages/FindJobs';
import FindTalentPage from './pages/FindTalentPage';
import WhyUpworkPage from './pages/WhyUpworkPage';
import EnterprisePage from './pages/EnterprisePage';
import Footer from './components/Navigation/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen justify-content-between">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-work" element={<FindJobs />} />
          <Route path="/find-talent" element={<FindTalentPage />} />
          <Route path="/why-upwork" element={<WhyUpworkPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
                
        </Routes>
        <div className="mt-auto  h-50">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
