import { useEffect, useRef, useState } from "react"

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  rotate = "",
  className = "",
  style,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const base = rotate ? `${rotate} ` : ""
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? `${base}translateY(0)` : `${base}translateY(${y}px)`,
        transition: `opacity 0.7s ${EASE} ${delay}s, transform 0.7s ${EASE} ${delay}s`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  )
}