import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import OwnerDashboard from './pages/owner';
import RenterDashboard from './pages/renter';

function App() {
  return (
    <Router basename="/househaunt-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/renter" element={<RenterDashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
