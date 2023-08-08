import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App=()=> {
  return (
    <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
