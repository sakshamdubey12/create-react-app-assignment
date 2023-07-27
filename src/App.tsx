import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './Components/First_page/firstpage';
import SecondPage from './Components/Second_page/Component1';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
