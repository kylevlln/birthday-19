const BODY = "M50 20 C 73 20 90 42 90 64 C 90 86 73 100 50 100 C 27 100 10 86 10 64 C 10 42 27 20 50 20 Z"

const EYES = (
  <>
    <circle cx="37" cy="54" r="4.6" fill="#24303f" />
    <circle cx="63" cy="54" r="4.6" fill="#24303f" />
    <circle cx="38.6" cy="52.4" r="1.5" fill="#fff" />
    <circle cx="64.6" cy="52.4" r="1.5" fill="#fff" />
  </>
)

const BLUSH = (
  <>
    <circle cx="26" cy="62" r="4.6" fill="#f4b8c8" opacity="0.6" />
    <circle cx="74" cy="62" r="4.6" fill="#f4b8c8" opacity="0.6" />
  </>
)

const SMILE = (
  <path d="M42 70 Q50 77 58 70" stroke="#24303f" strokeWidth="3" strokeLinecap="round" fill="none" />
)

export default function Critter({ variant = "chi" }) {
  if (variant === "hachi") {
    return (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="crit-svg">
        <path d={BODY} fill="#ffffff" stroke="#dce8f4" strokeWidth="2" />
        <path d="M20 30 Q18 12 50 10 Q82 12 80 30 Q80 42 64 44 Q50 46 36 44 Q20 42 20 30 Z" fill="#3d7bb4" />
        {EYES}
        {BLUSH}
        {SMILE}
      </svg>
    )
  }

  if (variant === "usa") {
    return (
      <svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg" className="crit-svg">
        <path d="M32 20 C28 0 42 -8 46 0 C48 4 47 12 45 20 Z" fill="#fbf1de" stroke="#eadfc1" strokeWidth="2" />
        <path d="M68 20 C72 0 58 -8 54 0 C52 4 53 12 55 20 Z" fill="#fbf1de" stroke="#eadfc1" strokeWidth="2" />
        <path d="M33 16 C30 4 39 -2 41 4 C42 7 41 13 40 20 Z" fill="#f4b8c8" opacity="0.8" />
        <path d="M67 16 C70 4 61 -2 59 4 C58 7 59 13 60 20 Z" fill="#f4b8c8" opacity="0.8" />
        <path d="M50 32 C 73 32 90 52 90 72 C 90 92 73 104 50 104 C 27 104 10 92 10 72 C 10 52 27 32 50 32 Z" fill="#fbf1de" stroke="#eadfc1" strokeWidth="2" />
        {EYES}
        {BLUSH}
        <path d="M42 74 Q50 81 58 74" stroke="#24303f" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="crit-svg">
      <path d={BODY} fill="#fbf1de" stroke="#eadfc1" strokeWidth="2" />
      {EYES}
      {BLUSH}
      {SMILE}
    </svg>
  )
}
