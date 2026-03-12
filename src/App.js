
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Menu, MenuIcon, X } from 'lucide-react';

import FSDIntro from './pages/FSDIntro';
import ToolsRequiredNodeJS from './pages/ToolsRequiredNodeJS';
import ToolsRequiredXampp from './pages/ToolsRequiredXampp';
import ProjectSetup from './pages/ProjectSetup';
import UnderstandingFiles from './pages/UnderstandingFiles';
import PageNotFound from './pages/PageNotFound';

import NavigationBar from './components/NavigationBar';


function App() {
  const MainRef = useRef(null);
  const isMobile = window.innerWidth < 726;
  const [isOpen, setIsOpen] = useState(false);
  const [hasGivenName, setHasGivenName] = useState(() => !localStorage.getItem("s-fsd-t-user-name"));
  setInterval(() => {
    const name = localStorage.getItem("s-fsd-t-user-name");
    if (name) {
      setHasGivenName(true);
    } else {
      setHasGivenName(false);
    }
  }, 1000)
  const toggleMenu = () => setIsOpen(prev => !prev);
  const location = useLocation();
  const GenerateMainClass = () => {
    const pathname = location.pathname;
    let ClassName = "";
    if (pathname === "/") ClassName = "fsd-intro-page";
    else ClassName = "page-not-found-page";
    return ClassName;
  }
  useEffect(() => {
    MainRef.current.scrollTo(0, 0);
  }, [window.location.pathname]);
  return (
    <>
      <NavigationBar isOpen={isOpen} isMobile={isMobile} />
      <main
        ref={MainRef}
        className={`page ${GenerateMainClass()} ${isOpen ? "open" : ""} ${isMobile ? "is-mobile" : ""}`}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FSDIntro />} />
          <Route path="/project-setup" element={<ProjectSetup />} />
          <Route path="/tools-required/node-js" element={<ToolsRequiredNodeJS />} />
          <Route path="/tools-required/xampp-control-panel" element={<ToolsRequiredXampp />} />
          <Route path="/understanding-files" element={<UnderstandingFiles />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SpeedInsights />
        <Analytics />
      </main>
      <div className={`toggle-btn ${isOpen ? "open" : ""} ${!hasGivenName ? "hide" : ""}`}>
        <button onClick={toggleMenu}>
          <div className="open">
            <Menu />
          </div>
          <div className="close">
            <X />
          </div>
        </button>
      </div>
    </>
  );
}

export default App;
