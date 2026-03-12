import Wrapper from "./Wrapper";
import UL from "./UL";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const NavigationButton = ({ label = "My Dropdown", path = "", isDropdown = false, links = [{ label: "Link", path: "" }], icon = true }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const active = window.location.pathname === path;
  return (isDropdown) ? (
    <div className="navigation-link-dropdown">
      <button className="toggle" onClick={() => setIsOpen(prev => !prev)}>
        <div className={`icon ${isOpen ? "is-open" : ""}`}>
          <ChevronRight />
        </div>
        <p className="light">{label}</p>
      </button>
      {isOpen && <UL
        contents={[
          links.map(l => {
            return l
          })
        ]}
        hasStep
      />}
    </div>
  ) : (
    <button onClick={() => navigate(path)} className={`navigation-link ${(active) ? "active" : ""}`}>
      {icon && <div className={`icon`} style={{ opacity: 0 }}>
        <ChevronRight />
      </div>}
      <p className="light">{label}</p>
    </button>
  )
}

export default function NavigationBar({ isOpen, isMobile }) {
  const navigate = useNavigate();
  const RouteName = window.location.pathname;
  return (
    <div className={`navigation-bar ${isOpen ? "open" : ""} ${isMobile ? "is-mobile" : ""} ${!localStorage.getItem("s-fsd-t-user-name") ? "hide" : ""}`}>
      <Wrapper>
        <div className="logo">
          <Logo fill={"var(--primary-10)"} />
        </div>
        <UL
          contents={[
            <NavigationButton label="Quick Introduction" path="/" icon={false} />,
            <NavigationButton label="Concepts" isDropdown={true} links={[
              <NavigationButton label="Required Tools" isDropdown={true} links={[
                <NavigationButton label="Node JS" path="/tools-required/node-js" />,
                <NavigationButton label="XAMPP Control Panel" path="/tools-required/xampp-control-panel" />
              ]} />,
              <NavigationButton label="Project Setup" path="/project-setup" icon />,
              <NavigationButton label="Understanding" isDropdown={true} links={[
                <NavigationButton label="Files" path="/understanding-files" />,
                <NavigationButton label="Folders" path="/understanding-folders" />
              ]} />,
            ]} />
          ]}
        />
      </Wrapper>
    </div>
  )
}