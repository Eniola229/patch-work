import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import PageLinks from './PageLinks';
import Contact from './Contact';


const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/" element={<PageLinks />} />
         <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
  );
};

export default App;
