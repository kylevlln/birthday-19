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
          Every item on this list is something I&rsquo;ll actually use — my
          setup, my uniform, my daily carry. I made this site so you can see
          exactly what I&rsquo;d spend on, and if you&rsquo;d rather just send a
          little help, I&rsquo;ll put it straight toward these. Either way, it
          becomes my reason to work and study even harder.
        </p>
      </Reveal>
    </section>
  )
}