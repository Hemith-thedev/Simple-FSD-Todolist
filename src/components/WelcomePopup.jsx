import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";

export default function WelcomePopup({ className }) {
  const [name, setName] = useState(() => {
    const storedName = localStorage.getItem("s-fsd-t-user-name");
    return storedName;
  });
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("s-fsd-t-user-theme");
    return (storedTheme) ? storedTheme : 220;
  });
  const [placeholder, setPlaceholder] = useState("");
  useEffect(() => {
    localStorage.setItem("s-fsd-t-user-theme", theme);
  }, [theme]);

  const submitName = () => localStorage.setItem("s-fsd-t-user-name", name);
  const submitTheme = (e) => {
    setTheme(e.target.value);
    localStorage.setItem("s-fsd-t-user-theme", theme);
    document.documentElement.style.setProperty("--hue-value", theme);
  }

  return <div className={`welcome-popup ${className}`}>
    <Wrapper>
      <div className="form name-form">
        <div className="input-field margin-bottom">
          <p>😄I'd like to know your sweet name!</p>
          <input
            type="text"
            placeholder={placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-center"
          />
        </div>
        <div className="input-field">
          <p>What's your mood!?</p>
          <div className="input-range-box">
            <div className="range-box">
              <input type="range" name="theme" value={theme} min={0} max={360} onInput={submitTheme} />
            </div>
            <div className="color-preview"></div>
          </div>
        </div>
        <button onClick={() => {
          if (name !== "") {
            submitName();
          } else {
            setPlaceholder("😇Name should not be empty!");
            setTimeout(() => {
              setPlaceholder("");
            }, 2000);
          }
        }}>Dive in!</button>
      </div>
    </Wrapper>
  </div>
}