
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';

import FSDIntro from './pages/FSDIntro';
import PageNotFound from './pages/PageNotFound';

function App() {
  const location = useLocation();
  const GenerateMainClass = () => {
    const pathname = location.pathname;
    let ClassName = "";
    if (pathname === "/") ClassName = "fsd-intro-page";
    else ClassName = "page-not-found-page";
    return ClassName;
  }
  return (
    <>
      <main className={`page ${GenerateMainClass()}`}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FSDIntro />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
