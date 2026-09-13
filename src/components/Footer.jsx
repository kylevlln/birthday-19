import { Link } from "react-router-dom"
import { config } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-tiny">thank you for being part of my {config.age}th</p>
      <p>Built entirely by me, {config.name}.</p>
      <p>Every gift here makes me study even harder.</p>
      <Link to="/privacy" className="footer-link">
        Privacy Policy (it&rsquo;s a fun one)
      </Link>
    </footer>
  )
}