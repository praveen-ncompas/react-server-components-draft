import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import ClientComponent from './ClientComponent';

function App() {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/client" element={<ClientComponent />} />
          </Routes>
    </div>
  );
}

export default App;
