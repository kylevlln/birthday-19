import { QRCodeSVG } from "qrcode.react"
import { config } from "../data"
import Reveal from "./Reveal"

export default function Payment() {
  const qrValue = `GCash ${config.accountNumber} | Birthday gift for ${config.name}`
  return (
    <section className="section pay" id="gift">
      <Reveal delay={0}>
        <p className="pay-kind">
          If you cannot give me anything, it&rsquo;s okay. I made this website as a
          fun project for family only. It is the thought that counts.
        </p>
      </Reveal>
      <Reveal rotate="rotate(-1.5deg)" className="inline-block">
        <p className="eyebrow">prefer to just send it?</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2>
          Scan to <span className="mark">send</span> a gift
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="section-body">
          Prefer money over stuff? Scan or type the number, it lands straight in
          my {config.payVia}.
        </p>
      </Reveal>

      <Reveal delay={0.24} y={28}>
        <div className="pay-card">
          <div className="qr-box">
            <QRCodeSVG
              value={qrValue}
              size={176}
              fgColor="#24303f"
              bgColor="#ffffff"
              level="M"
            />
          </div>
          <div className="pay-info">
            <p className="pay-label">PAY VIA</p>
            <p className="pay-app">{config.payVia}</p>
            <p className="pay-number">message me!</p>
            <p className="pay-note">{config.payNote}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}