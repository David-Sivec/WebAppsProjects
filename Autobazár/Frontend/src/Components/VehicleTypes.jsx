import "./VehicleTypes.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function BestAdvertisements() {
  const [arrowR, setArrowR] = useState(0)
  const [display, setDisplay] = useState("")
  const [arrowL, setArrowL] = useState(0)
  const [display2, setDisplay2] = useState("")

  const information = [
    {title: "sedan", price: "20,000€", img: "./vehicle types/sedan.png"},
    {title: "offroad", price: "40,000€", img: "./vehicle types/offroad.png"},
    {title: "coupe", price: "30,000€", img: "./vehicle types/coupe.png"},
    {title: "combi", price: "15,000€", img: "./vehicle types/combi.png"},
    {title: "suv", price: "25,000€", img: "./vehicle types/suv.png"},
    {title: "van", price: "50,000€", img: "./vehicle types/van.png"}
  ];

  const handlearrowR = (value, changeDisplay, changeDisplay2) => {
    setArrowR(value)
    setDisplay(changeDisplay)
    setDisplay2(changeDisplay2)
  }

  const handlearrowL = (value, changeDisplay, changeDisplay2) => {
    setArrowR(value)
    setDisplay2(changeDisplay)
    setDisplay(changeDisplay2)
  }

  return (
    <div className="best-advertisements">
      <div className="best-advertisements-header">
        <h2>Vehicle types</h2>
        <Link to="/vehicles" className="more-link">All vehicles →</Link>
      </div>
      {/* Advertisement cards */}
      <div className="arrow-r" onClick={() =>{handlearrowR(500, "none", "flex")}} style={{display: display}}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>
      </div>
      <div className="arrow-l" onClick={() =>{handlearrowL(0, "none", "flex")}} style={{display: display2}}>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#ffffff"></path> </g></svg>
      </div>
      <div className="best-advertisements-wrapper">
        <div className="best-advertisement-cards" style={{transform: `translateX(-${arrowR}px)`}}>
          {information.map(index => {
            return (
              <div className="best-advertisement-card" key={index.title}>
                <img src={index.img} alt="" className="img" />
                <h3>{index.title}</h3>
                <p className="price">{index.price}</p>
              </div>
            )}
          )}
        </div>
      </div>
    </div>
  );
}

export default BestAdvertisements;