import "./bricks.css"
import Filtration from "../Components/Filtration"

function Vehicles() {
  return (
    <div className="vehicles">
      <div className="wrapper">
        <div className="header">
          <h1>Discover Great Deals on Wheels</h1>
          <p>Explore our extensive collection of vehicles, from cars to trucks, all at unbeatable prices.</p>
        </div>
        <div className="box">
          <Filtration />
          <div className="vehicle-list">
            <div className="vehicle-card">hi</div>
            <div className="vehicle-card">hi</div>
            <div className="vehicle-card">hi</div>
            <div className="vehicle-card">hi</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vehicles