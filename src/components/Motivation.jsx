import Reveal from "./Reveal"

export default function Motivation() {
  return (
    <section className="section mot">
      <Reveal rotate="rotate(-1.5deg)" className="inline-block">
        <p className="eyebrow">why this list exists</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2>
          Everything here is my{" "}
          <span className="mark">fuel</span> to keep studying
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="section-body">
          Real things I&rsquo;ll use: my setup, my fits, my daily carry. Item or
          money, it all becomes my reason to push harder.
        </p>
      </Reveal>
    </section>
  )
}