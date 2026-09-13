import { Link } from "react-router-dom"
import { config } from "../data"

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        This website was designed, built, and shipped entirely by me,{" "}
        {config.name}.
      </p>
      <p>
        Every gift added to this list is my fuel — it pushes me to work and
        study even harder.
      </p>
      <p className="footer-tiny">thank you for being part of my {config.age}th</p>
      <Link to="/privacy" className="footer-link">
        Privacy Policy (it&rsquo;s a fun one)
      </Link>
    </footer>
  )
}