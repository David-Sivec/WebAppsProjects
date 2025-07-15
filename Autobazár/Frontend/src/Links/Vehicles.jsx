import "./bricks.css"
import HorizontalFiltration from "../Components/HorizontalFiltration"
import { useState } from "react"

function Vehicles() {
  const [heart, setHeart] = useState(false)

  const handleheart = () => {
    setHeart(!heart)
  }

  return (
    <div className="vehicles">
      <div className="wrapper">
        <div className="header">
          <h1>Discover Great Deals on Wheels</h1>
          <p>Explore our extensive collection of vehicles, from cars to trucks, all at unbeatable prices.</p>
        </div>
        <div className="box">
          <HorizontalFiltration />
          <div className="vehicle-list">
            <div className="vehicle-card">
              <img src="./images/bg.jpg" alt="" className="vehicle-card-image" />
              <div className="favorite" onClick={handleheart}>
                <svg className={`svg ${heart ? "fill" : ""}`} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div className="location">
                Slovakia
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <h3>Skoda Octavia</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>2015 <span>·</span> 88000km <span>·</span> combi <span>·</span> used <span>·</span> petrol <span>·</span> 8L/100km</p>
              <div className="vehicle-card-bottom">
                <p className="card-price">€20,000</p>
                <button className="vehicle-card-btn">Show more</button>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="./images/bg.jpg" alt="" className="vehicle-card-image" />
              <div className="favorite" onClick={handleheart}>
                <svg className={`svg ${heart ? "fill" : ""}`} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div className="location">
                Poland
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <h3>BMW e36</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>2000 <span>·</span> 188000km <span>·</span> sedan <span>·</span> used <span>·</span> petrol <span>·</span> 8L/100km</p>
              <div className="vehicle-card-bottom">
                <p className="card-price">€60,000</p>
                <button className="vehicle-card-btn">Show more</button>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="./images/bg.jpg" alt="" className="vehicle-card-image" />
              <div className="location">
                Slovakia
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <h3>Skoda Octavia</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>2015 <span>·</span> 88000km <span>·</span> combi <span>·</span> used <span>·</span> petrol <span>·</span> 8L/100km</p>
              <div className="vehicle-card-bottom">
                <p className="card-price">€20,000</p>
                <button className="vehicle-card-btn">Show more</button>
              </div>
            </div>
            <div className="vehicle-card">
              <img src="./images/bg.jpg" alt="" className="vehicle-card-image" />
              <div className="location">
                Slovakia
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <h3>Skoda Octavia</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>2015 <span>·</span> 88000km <span>·</span> combi <span>·</span> used <span>·</span> petrol <span>·</span> 8L/100km</p>
              <div className="vehicle-card-bottom">
                <p className="card-price">€20,000</p>
                <button className="vehicle-card-btn">Show more</button>
              </div>
            </div>
          </div>
          <table></table>
          <table className="vehicle-table">
            <tbody>
              <th className="table-card">
                <td className="vehicle-table-img-wrapper">
                  <img src="./images/bg.jpg" alt="" className="vehicle-table-img" />
                  <div className="location">
                    Slovakia
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                </td>
                <td className="table-text-wrapper">
                  <td className="table-heading">Skoda Octavia</td>
                  <td className="table-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                  <td className="table-text">2015 <span>·</span> 88000km <span>·</span> combi <span>·</span> used <span>·</span> petrol <span>·</span> 8L/100km</td>
                </td>
              </th>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Vehicles