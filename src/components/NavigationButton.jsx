
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import UL from "./UL";
import { useNavigate } from "react-router-dom";

export default function NavigationButton({ label = "My Dropdown", path = "", isDropdown = false, links = [{ label: "Link", path: "" }], icon = true }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const active = window.location.pathname === path;
  return (isDropdown) ? (
    <div className="navigation-link-dropdown">
      <button className="toggle" onClick={() => setIsOpen(prev => !prev)}>
        <div className={`icon ${isOpen ? "is-open" : ""}`}>
          <ChevronRight />
        </div>
        <p className="nav-link light">{label}</p>
      </button>
      <UL
        className={`${isOpen ? "open" : ""}`}
        contents={[
          links.map(l => {
            return l
          })
        ]}
        hasStep
      />
    </div>
  ) : (
    <button onClick={() => navigate(path)} className={`navigation-link ${(active) ? "active" : ""}`}>
      {icon && <div className={`icon`} style={{ opacity: 0 }}>
        <ChevronRight />
      </div>}
      <p className="nav-link light">{label}</p>
    </button>
  )
}