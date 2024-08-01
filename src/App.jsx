// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Haibazo from "./Pages/HAIBAZO/Haibazo";


import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Haibazo/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 
