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
        image: "./images/bg.jpg",
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
        image: "./images/bg.jpg",
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
        image: "./images/bg.jpg",
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
        image: "./images/bg.jpg",
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
    <div className="ad-detail">
      <h2>
        {ad.brand} {ad.model}
      </h2>
      <img src={ad.image} alt={`${ad.brand} ${ad.model}`} className="detail-image" />
      <p>
        <strong>Location:</strong> {ad.location}
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
      <p>
        <strong>Price:</strong> {ad.price}
      </p>
      <p>
        <strong>Description:</strong> {ad.text}
      </p>
      <button onClick={() => navigate(-1)} className="back-btn">
        Back
      </button>
    </div>
  );
}

export default AdDetail;