import Wrapper from "./Wrapper";
import { Copy, CopyCheck, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

export default function CodeDisplay({ label = "", Code = <></>, hasMarginBottom, icon, moveIcon }) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const CoderRef = useRef(null);
  
  const copyText = () => {
    const code = CoderRef.current.innerText.replace(/\n/g, '\r\n');
    navigator.clipboard.writeText(code)
      .then(() => setCopied(true))
      .catch(err => console.error(err))
      .finally(() => setTimeout(() => setCopied(false), 2000));
  };

  const toggle = () => setIsOpen(prev => !prev);

  return (
    <div className={`code-display ${hasMarginBottom ? "margin-bottom" : ""}`}>
      <Wrapper className={"code-display-wrapper"}>
        <div className="code-display-header">
          <div className="label">
            {icon ? icon : <></>} <p className="bold"> {label}</p>
          </div>
          <div className="options">
            <button onClick={copyText} className={`copy-icon ${moveIcon ? "is-scrolled" : ""}`}>
              {copied ? <CopyCheck /> : <Copy />}
            </button>
            <button onClick={toggle} className={`toggle-icon ${isOpen ? "is-open" : ""}`}>
              <ChevronDown rotate={(isOpen) ? 180 : 0} />
            </button> 
          </div>
        </div>
        {isOpen && <pre>
          <code ref={CoderRef}>
            {Code}
          </code>
        </pre>}
      </Wrapper>
    </div>
  )
}