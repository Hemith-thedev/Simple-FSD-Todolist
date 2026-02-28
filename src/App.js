import logo from './logo.svg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import Intro from './pages/FSDIntro';
import PageNotFound from './pages/PageNotFound';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
