import { QRCodeSVG } from "qrcode.react"
import { config } from "../data"
import Reveal from "./Reveal"

export default function Payment() {
  const qrValue = `GCash ${config.accountNumber} | Birthday gift for ${config.name}`
  return (
    <section className="section pay" id="gift">
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
          Everything on the list is exactly where your help would go. If you&rsquo;d
          rather send money than an object, scan the QR (or type the number below)
          and it lands straight in my {config.payVia}.
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
            <p className="pay-number">{config.accountNumber}</p>
            <p className="pay-note">{config.payNote}</p>
            <p className="pay-tiny">
              Tip the number into GCash manually if scanning feels fancy.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}