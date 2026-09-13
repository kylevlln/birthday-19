export default function Marquee() {
  const words = ["STUDY", "GRIND", "FAMILY", "THANK YOU", "19"]
  const seq = [...words, ...words]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {seq.map((w, i) => (
          <span key={i}>
            {w}
            <span className="marquee-star">✿</span>
          </span>
        ))}
      </div>
    </div>
  )
}