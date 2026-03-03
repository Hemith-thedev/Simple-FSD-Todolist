
const LI = ({ content }) => {
  return <li>{content}</li>
}

export default function UL({ head, contents = [], hasStep = false, hasMarginBottom = false }) {
  return <ul className={`${hasStep ? "step" : ""} ${hasMarginBottom ? "margin-bottom" : ""}`}>
    {head && <li>
      {head}
    </li>}
    {Array.isArray(contents) && contents.map((c, i) => (
      <LI key={i} content={c} />
    ))}
  </ul>
}