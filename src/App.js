import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:coinId" element={<Detail />} />
    </Routes>
  );
}

export default App;
