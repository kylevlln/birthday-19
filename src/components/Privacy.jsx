import { Link } from "react-router-dom"

function P({ children, n }) {
  return (
    <p>
      <b>{n}.</b> {children}
    </p>
  )
}

export default function Privacy() {
  return (
    <main className="privacy">
      <Link to="/" className="back">
        ← back to the wishlist
      </Link>
      <p className="eyebrow">privacy policy</p>
      <h1>The very serious legal stuff</h1>

      <div className="legal-card">
        <p className="legal-lead">
          (Spoiler: there is no legal stuff. Read on anyway.)
        </p>

        <P n={1}>
          <b>What we collect.</b> Nothing. This site is a wishlist. The only
          data inside it is a list of things I want and my grades. It does not
          track you, spy on you, or sell your immortal soul.
        </P>

        <P n={2}>
          <b>Cookies.</b> We do not use tracking cookies. There may be crumbs
          in the keyboard area but those are mine, from studying.
        </P>

        <P n={3}>
          <b>What happens if you send money.</b> It goes exactly where this
          list says it goes. I will use it to buy the items, then I will study
          harder, and I will update this site with even better grades. That is
          the whole loop.
        </P>

        <P n={4}>
          <b>Your data rights.</b> Since we don&rsquo;t have your data, the only
          rights involved are your bragging rights for being a great tita/tito
          or sibling.
        </P>

        <P n={5}>
          <b>Third parties.</b> GCash handles the money. That&rsquo;s it. If you
          scan the QR you are dealing with my GCash account and my screaming
          gratitude, in that order.
        </P>

        <P n={6}>
          <b>Emotional policy.</b> We are not liable for any feelings of being
          the favorite aunt, uncle, or sibling this year. Complaints will be
          answered with a thank-you text within 24 hours.
        </P>

        <P n={7}>
          <b>No refunds.</b> Returns are only accepted in the form of hugs.
          Expires shortly after my birthday.
        </P>

        <p className="legal-sign">
          Signed with love, plenty of caffeine, and fully by me — {""}
          <b>Spencer.</b>
        </p>
      </div>
    </main>
  )
}