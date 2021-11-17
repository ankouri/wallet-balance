import React from 'react';
import './App.css';
import {   BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home home />} />
          <Route path="/about" exact element={<Home  about/>} />
          <Route path="/contact" exact element={<Home contact/>} />
          <Route path="/terms" exact element={<Home terms/>} />
          <Route path="/nfts" exact element={<Home nfts/>} />
        </Routes>
      </Router>
  
  );
}

export default App;
