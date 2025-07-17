import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./AdDetails.css";

function AdDetail() {
  const { id } = useParams(); // Získa ID z URL
  const navigate = useNavigate();
  const [ad, setAd] = useState(null);

  useEffect(() => {
    // Simulácia načítania dát (nahradiť API volaním)
    const ads = [
      {
        id: 1,
        brand: "Skoda",
        model: "Octavia",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        location: "Slovakia",
        image: "/images/bg.jpg",
        price: "€20,000",
        registration: 2015,
        kilometers: "88000km",
        type: "combi",
        status: "used",
        fuel: "petrol",
        consumption: "8L/100km",
      },
      {
        id: 2,
        brand: "BMW",
        model: "e36",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        location: "Poland",
        image: "/images/bg.jpg",
        price: "€8,000",
        registration: 2000,
        kilometers: "150000km",
        type: "sedan",
        status: "used",
        fuel: "petrol",
        consumption: "8L/100km",
      },
      {
        id: 3,
        brand: "Audi",
        model: "RS6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        location: "Germany",
        image: "/images/bg.jpg",
        price: "€130,000",
        registration: 2023,
        kilometers: "10000km",
        type: "combi",
        status: "used",
        fuel: "diesel",
        consumption: "10L/100km",
      },
      {
        id: 4,
        brand: "Mercedes",
        model: "190E",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        location: "Czechia",
        image: "/images/bg.jpg",
        price: "€29,000",
        registration: 1980,
        kilometers: "170000km",
        type: "sedan",
        status: "used",
        fuel: "petrol",
        consumption: "6L/100km",
      },
    ];
    const selectedAd = ads.find((a) => a.id === parseInt(id));
    setAd(selectedAd);
  }, [id]);

  if (!ad) return <div className="loading">Loading...</div>;

  return (
    <div className="ad-detail-wrapper">
      <div className="ad-detail">
        <section>
          <img src={ad.image} alt={`${ad.brand} ${ad.model}`} className="detail-image" />
        </section>
        <section>
          <h3>
            {ad.brand} {ad.model}
          </h3>
          <p>
            <strong>
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#98CDFF" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  
            </strong> {ad.location}
          </p>
          <p className="text">
            {ad.text}
          </p>
          <p className="price">
            {ad.price}
          </p>
          <button onClick={() => navigate(-1)} className="back-btn">
            Back
          </button>
        </section>
      </div>
      <section className="ad-detail-descriptrion">
        <p>
            <strong>Description:</strong> {ad.text}
          </p>
        <p>
            <strong>Year:</strong> {ad.registration}
          </p>
          <p>
            <strong>Kilometers:</strong> {ad.kilometers}
          </p>
          <p>
            <strong>Type:</strong> {ad.type}
          </p>
          <p>
            <strong>Status:</strong> {ad.status}
          </p>
          <p>
            <strong>Fuel:</strong> {ad.fuel}
          </p>
          <p>
            <strong>Consumption:</strong> {ad.consumption}
          </p>
      </section>
    </div>
  );
}

export default AdDetail;