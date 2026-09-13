import Critter from "./Critter"

export default function Critters() {
  return (
    <div className="critter-layer" aria-hidden="true">
      <div className="crit hang" style={{ left: "2.5%" }}>
        <span className="string"></span>
        <Critter variant="chi" />
      </div>
      <div className="crit hang" style={{ right: "3.5%" }}>
        <span className="string" style={{ height: 92 }}></span>
        <Critter variant="hachi" />
      </div>
      <div className="crit hang" style={{ left: "6%", animationDuration: "8s" }}>
        <span className="string" style={{ height: 58 }}></span>
        <Critter variant="usa" />
      </div>
      <div className="crit sit" style={{ right: "2%", top: "24%" }}>
        <Critter variant="chi" />
      </div>
      <div className="crit sit" style={{ left: "1.5%", top: "54%", animationDuration: "7.5s" }}>
        <Critter variant="usa" />
      </div>
      <div className="crit sit" style={{ right: "1.5%", top: "76%" }}>
        <Critter variant="hachi" />
      </div>
    </div>
  )
}