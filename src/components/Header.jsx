import { config } from "../data"
import Reveal from "./Reveal"
import useCountdown from "../hooks/useCountdown"

function CountdownChip({ value, label }) {
  return (
    <div className="count-chip">
      <span className="count-num">{String(value).padStart(2, "0")}</span>
      <span className="count-label">{label}</span>
    </div>
  )
}

function go(target) {
  const el = document.querySelector(target)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Header() {
  const t = useCountdown()

  return (
    <>
      <nav className="nav">
        <div className="pill">
          <a
            className="wordmark"
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              go("#top")
            }}
          >
            spence&rsquo;s 19<sup>✿</sup>
          </a>
          <div className="nav-links">
            {[
              ["#top", "Top"],
              ["#wishlist", "Wishlist"],
              ["#grades", "Grades"],
            ].map(([target, label]) => (
              <a
                key={label}
                href={target}
                onClick={(e) => {
                  e.preventDefault()
                  go(target)
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#gift"
              className="pill-cta"
              onClick={(e) => {
                e.preventDefault()
                go("#gift")
              }}
            >
              Send a gift
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <Reveal delay={0} rotate="rotate(-1.2deg)" className="inline-block">
          <p className="badge">MY {config.age}TH BIRTHDAY · SEPT 25</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="hero-h1">
            A tiny wishlist where every{" "}
            <span className="hl">gift</span> helps
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="hero-desc">
            Peek at what I&rsquo;m saving for, and know exactly where your help
            goes.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="countdown">
            <span className="countdown-note">SEPT 25 IN…</span>
            <div className="count-chips">
              <CountdownChip value={t.days} label="days" />
              <CountdownChip value={t.hours} label="hrs" />
              <CountdownChip value={t.minutes} label="min" />
              <CountdownChip key={t.seconds} value={t.seconds} label="sec" />
            </div>
          </div>
        </Reveal>

        <div className="doodles" aria-hidden="true">
          <span className="spark s1">✦</span>
          <span className="spark s2">✧</span>
          <span className="spark s3">✦</span>
          <span className="spark s4">✧</span>
          <span className="spark s5">✦</span>
          <span className="flower-doodle">✿</span>
        </div>
      </header>
    </>
  )
}