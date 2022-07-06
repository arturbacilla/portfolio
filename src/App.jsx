import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Frontpage />} />
      <Route exact path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
}

export default App;
