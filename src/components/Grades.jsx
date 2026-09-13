import { grades } from "../data"
import Reveal from "./Reveal"

export default function Grades() {
  return (
    <section className="section" id="grades">
      <Reveal rotate="rotate(-1.5deg)" className="inline-block">
        <p className="eyebrow">proof the wishlist works</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2>
          My <span className="mark">running</span> grades
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="section-body">
          Every gift turns into better numbers.
        </p>
      </Reveal>

      <div className="sem-grid">
        {grades.map((sem, i) => (
          <Reveal key={sem.sem} delay={0.08 * i} y={28}>
            <div className="sem-card">
              <div className="sem-head">
                <p className="sem-name">{sem.sem}</p>
                <span className="sem-gwa" data-live={sem.gwa === "prelims"}>
                  {sem.gwa === "prelims" ? "PRELIMS" : `GWA ${sem.gwa}`}
                </span>
              </div>
              <ul className="sem-rows">
                {sem.rows.map(([subject, grade]) => (
                  <li key={subject}>
                    <span className="sem-subject">{subject}</span>
                    <span className="sem-grade">{grade}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="grades-footnote">
          Y2S1 is still in prelims. The final scores are filling up now.
        </p>
      </Reveal>
    </section>
  )
}