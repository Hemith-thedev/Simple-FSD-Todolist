
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Menu, X } from 'lucide-react';

import FSDIntro from './pages/FSDIntro';
import ToolsRequiredNodeJS from './pages/ToolsRequiredNodeJS';
import ToolsRequiredXampp from './pages/ToolsRequiredXampp';
import UnderstandingFiles from './pages/UnderstandingFiles';
import UnderstandingFolders from './pages/UnderstandingFolders';
import ProjectSetup from './pages/ProjectSetup';
import ServerPackage from './pages/codes/server/for_package/Package';
import ServerBasics from "./pages/codes/server/for_server/Basics";
import ServerMiddleware from './pages/codes/server/for_server/Middleware';
import ServerDatabase from "./pages/codes/server/for_server/Database";
import ServerCreate from "./pages/codes/server/for_server/routes/Create";
import ServerRead from "./pages/codes/server/for_server/routes/Read";
import ServerUpdate from "./pages/codes/server/for_server/routes/Update";
import ServerDelete from "./pages/codes/server/for_server/routes/Delete";
import ServerListening from "./pages/codes/server/for_server/Listening";
import PageNotFound from './pages/PageNotFound';

import NavigationBar from './components/NavigationBar';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


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
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.utils.toArray(document.querySelectorAll("main p")).forEach((el) => {
  //   gsap.fromTo(el, {
  //     opacity: 0
  //   }, {
  //     opacity: 1,
  //     scrollTrigger: {
  //       scroller: "main",
  //       trigger: el,
  //       start: "top 95%",
  //       end: "bottom 95%",
  //       scrub: 1
  //     }
  //   })
  // })
  return (
    <>
      <NavigationBar isOpen={isOpen} isMobile={isMobile} />
      <main
        ref={MainRef}
        className={`page ${GenerateMainClass()} ${isOpen ? "open" : ""} ${isMobile ? "is-mobile" : ""}`}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<FSDIntro />} />
          <Route path="/tools-required/node-js" element={<ToolsRequiredNodeJS />} />
          <Route path="/tools-required/xampp-control-panel" element={<ToolsRequiredXampp />} />
          <Route path="/understanding-files" element={<UnderstandingFiles />} />
          <Route path="/understanding-folders" element={<UnderstandingFolders />} />
          <Route path="/project-setup" element={<ProjectSetup />} />
          <Route path="/codes/server-side/package" element={<ServerPackage />} />
          <Route path="/codes/server-side/server/basics" element={<ServerBasics />} />
          <Route path="/codes/server-side/server/middleware" element={<ServerMiddleware />} />
          <Route path="/codes/server-side/server/database" element={<ServerDatabase />} />
          <Route path="/codes/server-side/server/routes/create" element={<ServerCreate />} />
          <Route path="/codes/server-side/server/routes/read" element={<ServerRead />} />
          <Route path="/codes/server-side/server/routes/update" element={<ServerUpdate />} />
          <Route path="/codes/server-side/server/routes/delete" element={<ServerDelete />} />
          <Route path="/codes/server-side/server/listening" element={<ServerListening />} />
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
