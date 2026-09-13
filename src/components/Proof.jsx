import Reveal from "./Reveal"
import defenseImg from "../assets/defense-proof.jpg"

export default function Proof() {
  return (
    <section className="section proof" id="proof">
      <Reveal rotate="rotate(-1.5deg)" className="inline-block">
        <p className="eyebrow">built solo, defended solo</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2>
          Proof of my <span className="mark">Hardwork!</span>
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="section-body proof-body">
          The app I designed, coded, and defended all on my own. It carried our
          whole class through the majors of 1st year. You bet I&rsquo;m proud of it.
        </p>
      </Reveal>
      <Reveal delay={0.24} y={28}>
        <figure className="proof-card">
          <span className="tape" aria-hidden="true"></span>
          <img
            src={defenseImg}
            alt="Spencer presenting his solo-built app at the defense"
          />
          <figcaption>
            Defense day · 1st Year, Sem 2 · the app that carried us
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}