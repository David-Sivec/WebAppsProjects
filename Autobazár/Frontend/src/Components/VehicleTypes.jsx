import "./VehicleTypes.css";
import { Link } from "react-router-dom";

function BestAdvertisements() {
  const information = [
    {title: "sedan", price: "20,000€", img: "./vehicle types/sedan.png"},
    {title: "offroad", price: "40,000€", img: "./vehicle types/offroad.png"},
    {title: "coupe", price: "30,000€", img: "./vehicle types/coupe.png"},
    {title: "combi", price: "15,000€", img: "./vehicle types/combi.png"},
    {title: "suv", price: "25,000€", img: "./vehicle types/suv.png"},
    {title: "van", price: "50,000€", img: "./vehicles types/van.png"}
  ];
  return (
    <div className="best-advertisements">
      <div className="best-advertisements-header">
        <h2>Vehicle types</h2>
        <Link to="/vehicles" className="more-link">All vehicles</Link>
      </div>
      {/* Advertisement cards */}
      <div className="best-advertisements-wrapper">
        <div className="best-advertisement-cards">
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