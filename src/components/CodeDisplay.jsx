import Wrapper from "./Wrapper";
import { Copy, CopyCheck, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CodeDisplay({ label = "", Code = <></>, hasHead = true, hasMarginBottom, icon, moveIcon, startAt, endAt }) {
  const [isOpen, setIsOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const CoderRef = useRef(null);
  const [lines, setLines] = useState([]);

  const createLines = () => {
    if (typeof startAt === "number" && typeof endAt === "number") {
      // Create an array of line numbers from startAt to endAt
      const lineNumbers = [];
      for (let i = startAt; i <= endAt; i++) {
        lineNumbers.push(i);
      }
      if (lineNumbers.length > 0) {
        setLines(lineNumbers);
      } else {
        setLines([]); // Clear lines if no valid line numbers
      }
    }
  }

  useEffect(() => {
    createLines();
  }, [startAt, endAt]);

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
        {hasHead && <div className="code-display-header">
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
        </div>}
        {isOpen && <div className="lines-code">
          {lines.length > 0 && <div className="lines">
            {
              lines.map(line => <div className="line">
                <span>{line}</span>
              </div>)
            }
          </div>}
          <pre>
            <code ref={CoderRef}>
              {Code}
            </code>
          </pre>
        </div>}
      </Wrapper>
    </div>
  )
}