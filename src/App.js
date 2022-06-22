import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:coinId" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
