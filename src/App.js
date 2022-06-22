import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';
import React from 'react';

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
