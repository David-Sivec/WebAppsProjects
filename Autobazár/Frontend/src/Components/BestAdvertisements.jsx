import "./BestAdvertisements.css";
import { Link } from "react-router-dom";

function BestAdvertisements() {
  const information = [
    {title: "Carmodel 1", price: "20,000€", img: "./images/bg.jpg"},
    {title: "Carmodel 2", price: "40,000€", img: "./images/bg.jpg"},
    {title: "Carmodel 3", price: "30,000€", img: "./images/bg.jpg"},
    {title: "Carmodel 4", price: "15,000€", img: "./images/bg.jpg"},
    {title: "Carmodel 5", price: "25,000€", img: "./images/bg.jpg"},
    {title: "Carmodel 6", price: "50,000€", img: "./images/bg.jpg"}
  ];
  return (
    <div className="best-advertisements">
      <div className="best-advertisements-header">
        <h2>Best advertisements</h2>
        <Link to="/vehicles" className="more-link">All vehicles</Link>
      </div>
      {/* Advertisement cards */}
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
  );
}

export default BestAdvertisements;