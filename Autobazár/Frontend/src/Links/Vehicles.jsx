import "./bricks.css"
import HorizontalFiltration from "../Components/HorizontalFiltration"
import { useState } from "react"
import registration from "../Registrations"
import kilometers from "../Kilometers"

function Vehicles() {
  const [heart, setHeart] = useState(false)
  const [viewMode, setViewMode] = useState('cards')

  const handleheart = () => {
    setHeart(!heart)
  }

  const advertisements = [
    {id: 1, brand: "Skoda", model: "Octavia", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", location: "Slovakia", image: "./images/bg.jpg", price: "€20,000", registration: 2015, kilometers: "88000km", type: "combi", status: "used", fuel: "petrol", consumption:"8L/100km"},
    {id: 2, brand: "BMW", model: "e36", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", location: "Poland", image: "./images/bg.jpg", price: "€8,000", registration: 2000, kilometers: "150000km", type: "sedan", status: "used", fuel: "petrol", consumption:"8L/100km"},
    {id: 3, brand: "Audi", model: "RS6", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", location: "Germany", image: "./images/bg.jpg", price: "€130,000", registration: 2023, kilometers: "10000km", type: "combi", status: "used", fuel: "diesel", consumption:"10L/100km"},
    {id: 4, brand: "Mercedes", model: "190E", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", location: "Czechia", image: "./images/bg.jpg", price: "€29,000", registration: 1980, kilometers: "170000km", type: "sedan", status: "used", fuel: "petrol", consumption:"6L/100km"}
  ]

  const toggleViewMode = () => {
    setViewMode(viewMode === 'cards' ? 'table' : 'cards');
  }

  return (
    <div className="vehicles">
      <div className="wrapper">
        <div className="header">
          <h1>Discover Great Deals on Wheels
            <button className="table-card-btn" onClick={toggleViewMode}>Switch to {viewMode === "cards" ? "table" : "cards"}</button>
          </h1>
          <p>Explore our extensive collection of vehicles, from cars to trucks, all at unbeatable prices.</p>
        </div>
        <div className="box">
          <HorizontalFiltration />
          {viewMode === "cards" ? (
            <div className="vehicle-list">
            {advertisements.map(index => {
              return (
                <div className="vehicle-card" key={index.id}>
                <img src={index.image} alt="" className="vehicle-card-image" />
                <div className="favorite" onClick={handleheart}>
                  <svg className={`svg ${heart ? "fill" : ""}`} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div className="location">
                  {index.location}
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <h3>{index.brand} {index.model}</h3>
                <p>{index.text}</p>
                <p>{index.registration} <span>·</span> {index.kilometers} <span>·</span> {index.type} <span>·</span> {index.status} <span>·</span> {index.fuel} <span>·</span> {index.consumption}</p>
                <div className="vehicle-card-bottom">
                  <p className="card-price">{index.price}</p>
                  <button className="vehicle-card-btn">Show more</button>
                </div>
              </div>)
            })}
          </div>
          ) : (
          <table className="vehicle-table">
            <tbody>
              {advertisements.map(index => {
                return (
                  <th className="table-card" key={index.id}>
                    <td className="vehicle-table-img-wrapper">
                      <img src={index.image} alt="" className="vehicle-table-img" />
                      <div className="location">
                        {index.location}
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>
                    </td>
                    <td className="table-text-wrapper">
                      <td className="table-heading">{index.brand} {index.model}</td>
                      <td className="table-text">{index.text}</td>
                      <td className="table-text">{index.registration} <span>·</span> {index.kilometers} <span>·</span> {index.type} <span>·</span> {index.status} <span>·</span> {index.fuel} <span>·</span> {index.consumption}</td>
                      <td className="table-price">{index.price}</td>
                      <button className="vehicle-card-btn">Show more</button>
                      <div className="favorite" onClick={handleheart}>
                        <svg className={`svg ${heart ? "fill" : ""}`} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      </div>
                    </td>
                  </th>)
              })}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Vehicles