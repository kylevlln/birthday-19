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
          <b>What we collect.</b> Nothing. It&rsquo;s a wishlist, not a
          blackmail file.
        </P>

        <P n={2}>
          <b>Cookies.</b> No tracking cookies. Only crumbs from studying.
        </P>

        <P n={3}>
          <b>If you send money.</b> It goes exactly where the list says. Then I
          study harder and this site gets even better grades.
        </P>

        <P n={4}>
          <b>Your data rights.</b> We have none of your data. You have bragging
          rights.
        </P>

        <P n={5}>
          <b>Third parties.</b> GCash moves the money. That&rsquo;s the whole
          chain.
        </P>

        <P n={6}>
          <b>Emotional policy.</b> Complaints are answered with a thank-you
          text within 24 hours.
        </P>

        <P n={7}>
          <b>No refunds.</b> Returns are accepted only as hugs, expiring
          shortly after my birthday.
        </P>

        <p className="legal-sign">
          Signed with love, caffeine, and fully by me, <b>Spencer.</b>
        </p>
      </div>
    </main>
  )
}