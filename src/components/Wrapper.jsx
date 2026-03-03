
export default function Wrapper({ className, children, ref }) {
  return <div className={`wrapper ${className}`} ref={ref}>
    {children}
  </div>
}