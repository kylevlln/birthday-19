import { useEffect, useState } from "react"

function nextBirthday() {
  const now = new Date()
  const year = now.getFullYear()
  let target = new Date(`September 25, ${year} 00:00:00`)
  if (target - now < 0) {
    target = new Date(`September 25, ${year + 1} 00:00:00`)
  }
  return target
}

export default function useCountdown() {
  const [delta, setDelta] = useState(() => nextBirthday() - Date.now())

  useEffect(() => {
    const t = setInterval(() => setDelta(nextBirthday() - Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const sec = Math.max(0, Math.floor(delta / 1000))
  return {
    days: Math.floor(sec / 86400),
    hours: Math.floor((sec % 86400) / 3600),
    minutes: Math.floor((sec % 3600) / 60),
    seconds: sec % 60,
  }
}