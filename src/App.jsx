import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Motivation from "./components/Motivation"
import Marquee from "./components/Marquee"
import Wishlist from "./components/Wishlist"
import Grades from "./components/Grades"
import Payment from "./components/Payment"
import Footer from "./components/Footer"
import Privacy from "./components/Privacy"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <Motivation />
                <Marquee />
                <Wishlist />
                <Grades />
                <Payment />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </HashRouter>
  )
}