import { useState } from "react";
import Wrapper from "./Wrapper";

export default function WelcomePopup({className}) {
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  const submitName = () => localStorage.setItem("s-fsd-t-user-name", name);

  return <div className={`welcome-popup ${className}`}>
    <Wrapper>
      <div className="form name-form">
        <div className="input-field">
          <p>😄I'd like to know your sweet name!</p>
          <input
            type="text"
            placeholder={placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-center"
          />
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