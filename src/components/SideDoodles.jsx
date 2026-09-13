const deco = [
  { ch: "\u2726", side: "left", top: "10%", size: 24, color: "var(--yellow)", dur: "7s", del: "0s", rot: "-10deg" },
  { ch: "\u273f", side: "right", top: "16%", size: 20, color: "var(--blue)", dur: "8.5s", del: "1.1s", rot: "12deg" },
  { ch: "\u2727", side: "left", top: "34%", size: 15, color: "var(--blue)", dur: "6s", del: "2s", rot: "8deg" },
  { ch: "\u2726", side: "right", top: "42%", size: 16, color: "var(--yellow)", dur: "9s", del: "0.6s", rot: "-14deg" },
  { ch: "\u273f", side: "left", top: "56%", size: 18, color: "var(--blue)", dur: "7.5s", del: "1.7s", rot: "10deg" },
  { ch: "\u2727", side: "right", top: "63%", size: 23, color: "var(--yellow)", dur: "6.5s", del: "2.4s", rot: "-8deg" },
  { ch: "\u2726", side: "left", top: "78%", size: 14, color: "var(--yellow)", dur: "8s", del: "0.9s", rot: "12deg" },
  { ch: "\u273f", side: "right", top: "88%", size: 17, color: "var(--blue)", dur: "7s", del: "1.5s", rot: "-10deg" },
]

export default function SideDoodles() {
  return (
    <div className="side-doodles" aria-hidden="true">
      {deco.map((d, i) => (
        <span
          key={i}
          className={`sd sd-${d.side}`}
          style={{
            top: d.top,
            fontSize: d.size,
            color: d.color,
            animationDuration: d.dur,
            animationDelay: d.del,
            "--r": d.rot,
          }}
        >
          {d.ch}
        </span>
      ))}
    </div>
  )
}