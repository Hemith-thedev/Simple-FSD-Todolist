import Wrapper from "./Wrapper";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Table({ heads = [], rows = [], hasStep = false, hasMarginBottom = false }) {
  const thisTable = useRef(null);
  const scrollHorizontally = (direction) => {
    try {
      thisTable.current.scrollLeft += direction * 100;
    } catch (error) {
      console.error("Table horizontal scroll error:", error);
    }
  }
  return (
    <Wrapper className={`main-table-wrapper ${hasStep ? "step" : ""} ${hasMarginBottom ? "margin-bottom" : ""}`}>
      <Wrapper className="table-wrapper" ref={thisTable}>
        <table className="table">
          <thead>
            <tr>
              {heads.map((h, i) => (<th key={i}>{h}</th>))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (<tr key={i}>
              {r.map((c, j) => (<td key={j}>
                <p>{c}</p>
              </td>))}
            </tr>))}
          </tbody>
        </table>
      </Wrapper>
      <Wrapper className="buttons-wrapper">
        <button onClick={() => scrollHorizontally(-1)}>
          <ArrowLeft size={16} />
        </button>
        <button onClick={() => scrollHorizontally(1)}>
          <ArrowRight size={16} />
        </button>
      </Wrapper>
    </Wrapper>
  )
}