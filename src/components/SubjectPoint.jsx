
export default function SubjectPoint({ subject = { label: "", class: "", isHighlight: false, isBold: true }, separator, point, hasSpace = false }) {
  return <p className="subject-point">
    <span className={`subject ${subject.isHighlight ? "highlight" : ""} ${subject.isBold ? "bold" : ""}`}>
      <span className={subject.class}>{subject.label}</span>
    </span>
    {hasSpace && " "}
    <span className={`separator ${subject.isHighlight ? "highlight" : ""} ${subject.isBold ? "bold" : ""}`}>{separator} </span>
    {point}
  </p>
}