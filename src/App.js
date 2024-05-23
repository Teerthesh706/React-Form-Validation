import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './Form';
import Details from './Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};


export default App;
