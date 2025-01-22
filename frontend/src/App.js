import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import FileUpload from './components/FileUpload';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload/:type" element={<FileUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
