
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Menu, X, Pen } from 'lucide-react';

import FSDIntro from './pages/FSDIntro';
import ToolsRequiredNodeJS from './pages/ToolsRequiredNodeJS';
import ToolsRequiredXampp from './pages/ToolsRequiredXampp';
import JavaScriptIntro from './pages/concepts/understanding/languages/JavaScript';
import TypeScriptIntro from './pages/concepts/understanding/languages/TypeScript';
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
import AppImport from './pages/codes/client/app/Imports';
import AppTodoComponent from './pages/codes/client/app/TodoComponent';
import PageNotFound from './pages/PageNotFound';

import NavigationBar from './components/NavigationBar';
import WelcomePopup from './components/WelcomePopup';


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
  }, 10)
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
    if (MainRef.current) MainRef.current.scrollTo(0, 0);;
  }, [location.pathname]);
  useEffect(() => {
    const userTheme = localStorage.getItem("s-fsd-t-user-theme");
    if (userTheme) {
      document.documentElement.style.setProperty("--hue-value", userTheme);
    }
  }, [location.pathname]);

  const [showPopup, setShowPopup] = useState(() => !localStorage.getItem("s-fsd-t-user-name"));
  // eslint-disable-next-line
  const [_, setUserName] = useState(() => {
    const storedName = localStorage.getItem("s-fsd-t-user-name");
    if (storedName) return storedName.split(" ")[0];
  });
  const submitForm = () => {
    localStorage.removeItem("s-fsd-t-user-name");
    setShowPopup(true);
    document.body.style.overflow = "hidden"
  }
  setInterval(() => {
    const storedName = localStorage.getItem("s-fsd-t-user-name");
    if (storedName) {
      setUserName(storedName.split(" ")[0]);
      setShowPopup(false);
      document.body.style.overflow = "auto"
    } else {
      setUserName("");
      setShowPopup(true);
      document.body.style.overflow = "hidden"
    }
  }, 10);
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
          <Route path="/concepts/required-tools/node-js" element={<ToolsRequiredNodeJS />} />
          <Route path="/concepts/required-tools/xampp-control-panel" element={<ToolsRequiredXampp />} />
          <Route path="/concepts/understanding/languages/javascript-jsx" element={<JavaScriptIntro />} />
          <Route path="/concepts/understanding/languages/typescript" element={<TypeScriptIntro />} />
          <Route path="/concepts/understanding/files" element={<UnderstandingFiles />} />
          <Route path="/concepts/understanding/folders" element={<UnderstandingFolders />} />
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
          <Route path="/codes/client-side/app/imports" element={<AppImport />} />
          <Route path="/codes/client-side/app/todo-component" element={<AppTodoComponent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <SpeedInsights />
        <Analytics />
      </main>
      <WelcomePopup className={showPopup ? "" : "hidden"} />
      <div className="option-buttons">
        <div className={`theme-toggle ${!hasGivenName ? "hide" : ""}`}>
          <button onClick={submitForm}>
            <div className="open">
              <Pen />
            </div>
          </button>
        </div>
        <div className={`menu-toggle ${isOpen ? "open" : ""} ${!hasGivenName ? "hide" : ""}`}>
          <button onClick={toggleMenu}>
            <div className="open">
              <Menu />
            </div>
            <div className="close">
              <X />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
