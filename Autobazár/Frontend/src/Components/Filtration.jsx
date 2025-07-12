import "./Filtration.css"
import { useState, useEffect } from "react"
import models from "../Models"
import registrations from "../Registrations"
import kilometers from "../Kilometers"
import prices from "../Prices"

function Filtration() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [filteredModels, setFilteredModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState(0)
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedKilometer, setSelectedKilometer] = useState("")
  const [selectedPrices, setSelectedPrices] = useState("")
  const [selectedVehicleText, setSelectedVehicleText] = useState("car 🚗")
  const [currentVehicle, setCurrentVehicle] = useState("")

  const brands = [
    {id: 1, brand: "BMW"},
    {id: 2, brand: "Audi"},
    {id: 3, brand: "Mercedes"},
    {id: 4, brand: "Skoda"},
    {id: 5, brand: "VolksWagon"},
    {id: 6, brand: "Lamborghini"},
    {id: 7, brand: "Ferrari"},
    {id: 8, brand: "Ford"},
    {id: 9, brand: "Volvo"},
    {id: 10, brand: "Maserati"},
    {id: 11, brand: "Jaguar"},
    {id: 12, brand: "Aston Martin"},
    {id: 13, brand: "Tesla"}
  ]

  const handlechange = (event) => {
    const brandId = event.target.value; // Toto by malo byť číslo (napr. "8" pre Ford)
    if (brandId) {
      const brandIdNum = parseInt(brandId, 10); // Prevedenie na číslo
      const modelsForBrand = models.filter((model) => model.identificator === brandIdNum);
      setSelectedBrand(brandId); // Ulož číslo ako reťazec (alebo použi brandIdNum ako číslo)
      setFilteredModels(modelsForBrand);
    } else {
      setSelectedBrand('');
      setFilteredModels([]);
    }
  }

  useEffect(() => {
    if (selectedBrand) {
      const brandIdNum = parseInt(selectedBrand, 10);
      const modelsForBrand = models.filter((model) => model.identificator === brandIdNum);
      if (JSON.stringify(filteredModels) !== JSON.stringify(modelsForBrand)) {
        setFilteredModels(modelsForBrand);
      }
    }
  }, [selectedBrand, filteredModels])

  const handlevehicle = (value, vehicle) => {
    setSelectedVehicle(value)
    setSelectedVehicleText(vehicle)
  }

  const handleYear = (event) => {
    setSelectedYear(event.target.value)
  }

  const handleKilometer = (event) => {
    setSelectedKilometer(event.target.value)
  }

  const handlePrices = (event) => {
    setSelectedPrices(event.target.value)
  }

  return (
    <div className="filtration">
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="filtration-header">
        <div className="header-vehicle" onClick={() => {handlevehicle(0, "car 🚗")}}>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="#ffffff" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        <div className="header-vehicle" onClick={() => {handlevehicle(25, "truck 🚐")}}>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.52832 16.826C8.53464 17.7132 8.01843 18.5166 7.22106 18.8607C6.42369 19.2047 5.50274 19.0213 4.88882 18.3962C4.27491 17.7712 4.08935 16.828 4.41891 16.0077C4.74847 15.1873 5.52803 14.652 6.39307 14.652C6.95731 14.6499 7.49925 14.8777 7.89969 15.2854C8.30013 15.6931 8.52625 16.2473 8.52832 16.826V16.826Z" stroke="#ffffff" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7015 16.826C18.7078 17.7132 18.1916 18.5166 17.3942 18.8607C16.5969 19.2047 15.6759 19.0213 15.062 18.3962C14.4481 17.7712 14.2625 16.828 14.5921 16.0077C14.9216 15.1873 15.7012 14.652 16.5662 14.652C17.1305 14.6499 17.6724 14.8777 18.0728 15.2854C18.4733 15.6931 18.6994 16.2473 18.7015 16.826Z" stroke="#ffffff" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.1804 17.576C14.5946 17.576 14.9304 17.2403 14.9304 16.826C14.9304 16.4118 14.5946 16.076 14.1804 16.076V17.576ZM8.5254 16.076C8.11119 16.076 7.7754 16.4118 7.7754 16.826C7.7754 17.2403 8.11119 17.576 8.5254 17.576V16.076ZM13.4304 16.826C13.4304 17.2403 13.7662 17.576 14.1804 17.576C14.5946 17.576 14.9304 17.2403 14.9304 16.826H13.4304ZM14.9304 11.559C14.9304 11.1448 14.5946 10.809 14.1804 10.809C13.7662 10.809 13.4304 11.1448 13.4304 11.559H14.9304ZM14.1804 16.076C13.7662 16.076 13.4304 16.4118 13.4304 16.826C13.4304 17.2403 13.7662 17.576 14.1804 17.576V16.076ZM14.43 17.576C14.8442 17.576 15.18 17.2403 15.18 16.826C15.18 16.4118 14.8442 16.076 14.43 16.076V17.576ZM18.6972 16.0761C18.283 16.0779 17.9487 16.4151 17.9505 16.8293C17.9523 17.2435 18.2896 17.5779 18.7038 17.576L18.6972 16.0761ZM20.9625 14.485L21.7125 14.4816C21.7123 14.4384 21.7084 14.3954 21.7008 14.3529L20.9625 14.485ZM21.1772 11.4269C21.1042 11.0192 20.7146 10.7478 20.3068 10.8208C19.8991 10.8937 19.6277 11.2834 19.7007 11.6912L21.1772 11.4269ZM14.1794 6.12705C13.7652 6.12705 13.4294 6.46283 13.4294 6.87705C13.4294 7.29126 13.7652 7.62705 14.1794 7.62705V6.12705ZM17.7587 6.87705V7.62705C17.7637 7.62705 17.7688 7.627 17.7739 7.62689L17.7587 6.87705ZM19.3783 7.55055L19.9178 7.02951L19.9178 7.02951L19.3783 7.55055ZM20.0197 9.21805L19.27 9.19669C19.2685 9.24804 19.2723 9.2994 19.2814 9.34996L20.0197 9.21805ZM19.6996 11.691C19.7725 12.0987 20.1621 12.3702 20.5699 12.2974C20.9776 12.2245 21.2491 11.8349 21.1763 11.4271L19.6996 11.691ZM14.9284 6.87705C14.9284 6.46283 14.5927 6.12705 14.1784 6.12705C13.7642 6.12705 13.4284 6.46283 13.4284 6.87705H14.9284ZM13.4284 11.559C13.4284 11.9733 13.7642 12.309 14.1784 12.309C14.5927 12.309 14.9284 11.9733 14.9284 11.559H13.4284ZM13.4284 6.87705C13.4284 7.29126 13.7642 7.62705 14.1784 7.62705C14.5927 7.62705 14.9284 7.29126 14.9284 6.87705H13.4284ZM14.1784 6.07705L14.9285 6.07705L14.9284 6.07167L14.1784 6.07705ZM13.1137 5.00005L13.1137 5.75006L13.1187 5.75003L13.1137 5.00005ZM3.50512 5.00005L3.498 5.75005H3.50512V5.00005ZM2.75423 5.31075L2.22207 4.78225L2.22207 4.78225L2.75423 5.31075ZM2.4375 6.07505L1.6875 6.06834V6.07505H2.4375ZM2.4375 15.75L1.68747 15.75L1.68753 15.7568L2.4375 15.75ZM2.75423 16.5143L3.28638 15.9858L3.28638 15.9858L2.75423 16.5143ZM3.50512 16.825L3.50512 16.075L3.498 16.0751L3.50512 16.825ZM4.25783 17.575C4.67204 17.575 5.00783 17.2393 5.00783 16.825C5.00783 16.4108 4.67204 16.075 4.25783 16.075V17.575ZM14.1804 10.809C13.7662 10.809 13.4304 11.1448 13.4304 11.559C13.4304 11.9733 13.7662 12.309 14.1804 12.309V10.809ZM20.4399 12.309C20.8541 12.309 21.1899 11.9733 21.1899 11.559C21.1899 11.1448 20.8541 10.809 20.4399 10.809V12.309ZM14.1804 16.076H8.5254V17.576H14.1804V16.076ZM14.9304 16.826V11.559H13.4304V16.826H14.9304ZM14.1804 17.576H14.43V16.076H14.1804V17.576ZM18.7038 17.576C19.5117 17.5725 20.281 17.2397 20.8437 16.6573L19.765 15.615C19.4792 15.9108 19.0947 16.0743 18.6972 16.0761L18.7038 17.576ZM20.8437 16.6573C21.4058 16.0756 21.7162 15.2926 21.7125 14.4816L20.2125 14.4885C20.2145 14.9137 20.0514 15.3186 19.765 15.615L20.8437 16.6573ZM21.7008 14.3529L21.1772 11.4269L19.7007 11.6912L20.2242 14.6172L21.7008 14.3529ZM14.1794 7.62705H17.7587V6.12705H14.1794V7.62705ZM17.7739 7.62689C18.1691 7.61888 18.5544 7.7771 18.8389 8.07158L19.9178 7.02951C19.3477 6.43922 18.5622 6.1106 17.7434 6.1272L17.7739 7.62689ZM18.8389 8.07158C19.124 8.36679 19.282 8.77315 19.27 9.19669L20.7694 9.2394C20.7928 8.41808 20.4872 7.61907 19.9178 7.02951L18.8389 8.07158ZM19.2814 9.34996L19.6996 11.691L21.1763 11.4271L20.758 9.08613L19.2814 9.34996ZM13.4284 6.87705V11.559H14.9284V6.87705H13.4284ZM14.9284 6.87705V6.07705H13.4284V6.87705H14.9284ZM14.9284 6.07167C14.9213 5.07677 14.1245 4.24331 13.1088 4.25006L13.1187 5.75003C13.2708 5.74902 13.427 5.87963 13.4285 6.08242L14.9284 6.07167ZM13.1137 4.25005H3.50512V5.75005H13.1137V4.25005ZM3.51225 4.25008C3.02654 4.24547 2.5628 4.43917 2.22207 4.78225L3.28638 5.83925C3.3461 5.77912 3.42257 5.7493 3.498 5.75001L3.51225 4.25008ZM2.22207 4.78225C1.88199 5.12468 1.69183 5.58769 1.68753 6.06834L3.18747 6.08175C3.18832 5.98687 3.22602 5.90003 3.28638 5.83925L2.22207 4.78225ZM1.6875 6.07505V15.75H3.1875V6.07505H1.6875ZM1.68753 15.7568C1.69183 16.2374 1.88199 16.7004 2.22207 17.0428L3.28638 15.9858C3.22602 15.9251 3.18832 15.8382 3.18747 15.7433L1.68753 15.7568ZM2.22207 17.0428C2.5628 17.3859 3.02654 17.5796 3.51225 17.575L3.498 16.0751C3.42257 16.0758 3.3461 16.046 3.28638 15.9858L2.22207 17.0428ZM3.50512 17.575H4.25783V16.075H3.50512V17.575ZM14.1804 12.309H20.4399V10.809H14.1804V12.309Z" fill="#ffffff"></path> </g></svg>
        </div>
        <div className="header-vehicle" onClick={() => {handlevehicle(50, "bike 🚲")}}>
          <svg width="64px" height="64px" viewBox="-20 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.0019" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M114.15 147.72C87.34 147.72 83.05 117.13 98.64 105.1C97.72 103.23 96.76 101.25 95.76 99.2205L77.07 127.73L34.55 127.24L31.86 123.36L42 108.89C40.1722 108.281 38.2566 107.977 36.33 107.99C15.16 107.99 14.14 139.99 36.69 139.99C42.96 139.99 47.32 136.99 49.77 132.88L58.21 133.21C55.21 141.29 48.14 147.68 36.96 147.68C3.58001 147.68 5.10001 100.26 36.43 100.26C39.9224 100.211 43.3865 100.892 46.6 102.26L54.35 91.1805L51.08 85.0705L41.63 86.3905C38.2 81.7905 43.96 74.6705 50.63 75.5305C53.63 75.9205 66.63 77.0805 66.63 77.0805L67.06 82.8505L58 84.1505L59.91 87.8705L90 87.4405C87.49 82.2805 85.21 77.6105 83.72 74.5305C80.48 67.8605 90.01 66.4605 93.82 70.3005L91.82 76.9405C91.82 76.9405 106.23 106.33 110.55 114.54C111.55 116.35 115.04 120.44 118.26 121.93L115.69 126.68C109.21 124.73 106 120 103 114C102.74 113.48 102.46 112.92 102.17 112.32C93.17 121.02 96.56 139.91 113.84 139.91C134.34 139.91 134.47 108.03 113.48 108.03H112.91L110.15 100.45C111.285 100.313 112.427 100.243 113.57 100.24C144.83 100.3 144.63 147.72 114.15 147.72ZM47.48 112.28L40.12 122L52 121.9C51.6128 118.278 50.0212 114.891 47.48 112.28ZM58.1 98.2805L52.25 106C56.6614 110.162 59.3338 115.839 59.73 121.89L70.73 121.81L58.1 98.2805ZM63.48 94.8305L75.66 118.56L91.66 94.1005L63.48 94.8305Z" fill="#ffffff"></path> </g></svg>
        </div>
        <div className="header-vehicle" onClick={() => {handlevehicle(75, "scooter 🏍️")}}>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9999 3C13.4476 3 12.9999 3.44771 12.9999 3.99999C12.9999 4.55227 13.4476 4.99998 13.9999 4.99998H15.4088C15.8745 4.99998 16.2785 5.32139 16.3832 5.77511L16.6978 7.13841L9.60395 7.92662C9.24956 7.96599 8.89098 7.94187 8.54506 7.85539L3.32411 6.55016C1.63563 6.12804 0 7.40509 0 9.14554C0 10.407 0.881233 11.4971 2.11472 11.7614L6.8505 12.7762C7.06286 12.8217 7.25221 12.9345 7.39254 13.0944L6.44333 13.8327C5.76753 13.3105 4.92002 12.9999 3.99996 12.9999C1.79084 12.9999 0 14.7908 0 16.9999C0 19.209 1.79084 20.9998 3.99996 20.9998C6.20908 20.9998 7.99993 19.209 7.99993 16.9999C7.99993 16.4352 7.88293 15.8979 7.67186 15.4108L8.33105 14.8981L9.0527 16.3414C9.56088 17.3578 10.5997 17.9998 11.736 17.9998H12.2638C13.4001 17.9998 14.4389 17.3578 14.9471 16.3415L17.5981 11.0395L18.1544 13.4501C16.8741 14.1171 15.9999 15.4564 15.9999 16.9999C15.9999 19.209 17.7907 20.9998 19.9998 20.9998C22.2089 20.9998 23.9998 19.209 23.9998 16.9999C23.9998 14.8254 22.2646 13.0561 20.1033 13.0012L19.8723 11.9999H20.5277C20.6829 11.9999 20.836 12.0361 20.9749 12.1055L22.5526 12.8943C23.0466 13.1413 23.6472 12.9411 23.8942 12.4471C24.1412 11.9532 23.941 11.3525 23.447 11.1055L21.8693 10.3167C21.4527 10.1084 20.9934 9.99994 20.5277 9.99994H19.4107L19.18 8.99995H19.9998C20.5521 8.99995 20.9998 8.55223 20.9998 7.99995C20.9998 7.44767 20.5521 6.99996 19.9998 6.99996H18.7184L18.332 5.3254C18.0179 3.96422 16.8058 3 15.4088 3H13.9999ZM18.6355 15.535L19.0254 17.2247C19.1496 17.7629 19.6865 18.0984 20.2247 17.9743C20.7628 17.8501 21.0984 17.3132 20.9742 16.775L20.5841 15.0847C21.4046 15.3348 22.0016 16.0976 22.0016 16.9999C22.0016 18.1054 21.1054 19.0016 19.9998 19.0016C18.8943 19.0016 17.9981 18.1054 17.9981 16.9999C17.9981 16.4215 18.2433 15.9005 18.6355 15.535ZM3.99996 14.9981C4.26723 14.9981 4.52226 15.0505 4.75535 15.1455L3.38601 16.2106C2.95007 16.5496 2.87154 17.1779 3.2106 17.6139C3.54967 18.0498 4.17794 18.1283 4.61388 17.7893L5.98293 16.7244C5.99532 16.8145 6.00173 16.9064 6.00173 16.9999C6.00173 18.1054 5.10551 19.0016 3.99996 19.0016C2.89442 19.0016 1.9982 18.1054 1.9982 16.9999C1.9982 15.8943 2.89442 14.9981 3.99996 14.9981ZM1.99998 9.14554C1.99998 8.70623 2.41284 8.38387 2.83904 8.49042L8.05999 9.79566C8.63653 9.9398 9.23416 9.97999 9.82481 9.91437L16.2834 9.19675L13.1582 15.447C12.9888 15.7858 12.6426 15.9998 12.2638 15.9998H11.736C11.3572 15.9998 11.0109 15.7858 10.8415 15.447L9.32423 12.4124C8.91666 11.5973 8.16066 11.0116 7.26955 10.8206L2.53377 9.80584C2.22242 9.73912 1.99998 9.46396 1.99998 9.14554Z" fill="#ffffff"></path> </g></svg>
        </div>
        <div className="actual" style={{top: `${selectedVehicle}%`}}></div>
      </div>
      <h2>Find your dream {selectedVehicleText}</h2>
      <div className="filtration-wrapper">
        <section>
          <label>Brand</label>
          <select className="selection" value={selectedBrand} onChange={handlechange} key={selectedBrand}>
            <option value="" disabled>Any</option>
            {brands.map((index) => {
              return (
              <option key={index.id} value={index.id}>
                {index.brand}
              </option>)
            })}
          </select>
        </section>
        <section>
          <label>Model</label>
          <select className="selection" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedBrand}>
            <option value="" disabled>Any</option>
            {filteredModels.length > 0 ? (
              filteredModels.map((model) => (
                <option key={model.id} value={model.model}>
                  {model.model}
                </option>
              ))
            ) : (
              <option value="" disabled>
                No models available
              </option>
            )}
          </select>
        </section>
        <section>
          <label>registration year</label>
          <select className="selection" onChange={handleYear} value={selectedYear}>
            <option value="" disabled>Any</option>
            {registrations.map((index) => {
              return (
              <option key={index.id} value={index.id}>
                {index.year}
              </option>)
            })}
          </select>
        </section>
      </div>
      <div className="filtration-wrapper">
        <section>
          <label>kilmometers up to</label>
          <select className="selection" value={selectedKilometer} onChange={handleKilometer}>
            <option value="" disabled>Any</option>
            {kilometers.map((index) => {
              return (
              <option key={index.id} value={index.id}>
                {index.kilometer}
              </option>)
            })}
          </select>
        </section>
        <section>
          <label>Price up to</label>
          <select className="selection" value={selectedPrices} onChange={handlePrices}>
            <option value="" disabled>Any</option>
            {prices.map((index) => {
              return (
              <option key={index.id} value={index.id}>
                {index.price}
              </option>)
            })}
          </select>
        </section>
        <button className="filtration-btn">
          <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1E1E2F"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#1E1E2F" stroke-width="1.9200000000000004"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#FFFFFF" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Find Your Vehicle
          </button>
      </div>
    </div>
  )
}

export default Filtration