import { config, top, categories } from "../data"
import { PRODUCT_IMAGES } from "../products"
import Reveal from "./Reveal"

function PriceChip({ price }) {
  return (
    <span className="price-chip" data-price={price}>
      {config.currency}
      {price.toLocaleString()}
    </span>
  )
}

function Featured() {
  return (
    <Reveal y={28}>
      <div className="featured">
        <span className="tape" aria-hidden="true"></span>
        <p className="kicker-top">{top.kicker}</p>
        <h3>{top.title}</h3>
        <p className="featured-blurb">{top.blurb}</p>
        <div className="featured-grid">
          {top.items.map((it) => (
            <div className="featured-item" key={it.title}>
              <div className="img-wrap">
                <img src={PRODUCT_IMAGES[it.img]} alt={it.title} loading="lazy" />
              </div>
              <div className="featured-info">
                <h4>{it.title}</h4>
                <PriceChip price={it.price} />
                <p className="item-note">{it.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="featured-total">
          <span className="total-label">TOTAL FOR THE BIG ONE</span>
          <span className="total-value">
            {config.currency}
            {(
              top.items.reduce((a, b) => a + b.price, 0)
            ).toLocaleString()}
          </span>
        </div>
        <div className="perf" aria-hidden="true"></div>
      </div>
    </Reveal>
  )
}

function CategoryBlock({ cat }) {
  return (
    <div className="category" id={cat.id}>
      <Reveal rotate="rotate(-1.3deg)" className="inline-block">
        <p className="eyebrow cat-eyebrow">{cat.title}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="cat-blurb">{cat.blurb}</p>
      </Reveal>
      <div className="items">
        {cat.items.map((it, i) => (
          <Reveal key={it.title} delay={0.08 * i}>
            <article className="item-card">
              <div className="img-wrap">
                <img src={PRODUCT_IMAGES[it.img]} alt={it.title} loading="lazy" />
              </div>
              <div className="item-info">
                <h4>{it.title}</h4>
                <PriceChip price={it.price} />
                <p className="item-note">{it.note}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Wishlist() {
  return (
    <section className="section" id="wishlist">
      <Featured />
      <div className="cat-head">
        <Reveal className="inline-block">
          <p className="eyebrow">the rest of the wishlist</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2>The categories</h2>
        </Reveal>
      </div>
      {categories.map((c) => (
        <CategoryBlock key={c.id} cat={c} />
      ))}
    </section>
  )
}