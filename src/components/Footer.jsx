import { Link } from "react-router-dom"
import { config } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="thanks">
        <p className="thanks-h">thank you for scrolling all the way down here</p>
        <p className="thanks-sub">
          You made it to the bottom of my little wishlist. That alone means a
          lot to me.
        </p>
        <p className="thanks-promise">
          Even if you can&rsquo;t give anything, I&rsquo;ll still work hard in
          school. I promise.
        </p>
      </div>
      <p className="footer-tiny">thank you for being part of my {config.age}th</p>
      <p>Built entirely by me, {config.name}.</p>
      <p>Every gift here makes me study even harder.</p>
      <Link to="/privacy" className="footer-link">
        Privacy Policy (it&rsquo;s a fun one)
      </Link>
    </footer>
  )
}