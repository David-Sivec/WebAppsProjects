import "./Filtration.css"
import { useState, useEffect } from "react"
import models from "../Models"
import registrations from "../Registrations"

function Filtration() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [filteredModels, setFilteredModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedVehicle, setSelectedVehicle] = useState(0)
  const [selectedYear, setSelectedYear] = useState("")

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

  const handlevehicle = (value) => {
    setSelectedVehicle(value)
  }

  const handleYear = (event) => {
    setSelectedYear(event.target.value)
  }

  return (
    <div className="filtration">
      <div className="filtration-header">
        <div className="header-vehicle" onClick={() => {handlevehicle(0)}}>🚗</div>
        <div className="header-vehicle" onClick={() => {handlevehicle(25)}}>🚐</div>
        <div className="header-vehicle" onClick={() => {handlevehicle(50)}}>🚲</div>
        <div className="header-vehicle" onClick={() => {handlevehicle(75)}}>🏍️</div>
        <div className="actual" style={{top: `${selectedVehicle}%`}}></div>
      </div>
      <h2>Find your dream vehicle</h2>
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
          <label>registration</label>
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
        <section>
          <label>kilmometers</label>
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
      </div>
      <div className="filtration-wrapper">
        <select className="selection" value={selectedBrand} onChange={handlechange}>
          <option value="" disabled>- Choose a car -</option>
          {brands.map((index) => {
            return (
            <option key={index.id} value={index.model}>
              {index.brand}
            </option>)
          })}
        </select>
        <select className="selection" value={selectedBrand} onChange={handlechange}>
          <option value="" disabled>- Choose a car -</option>
          {brands.map((index) => {
            return (
            <option key={index.id} value={index.brand}>
              {index.brand}
            </option>)
          })}
        </select>
        <select className="selection" value={selectedBrand} onChange={handlechange}>
          <option value="" disabled>- Choose a car -</option>
          {brands.map((index) => {
            return (
            <option key={index.id} value={index.brand}>
              {index.brand}
            </option>)
          })}
        </select>
        <select className="selection" value={selectedBrand} onChange={handlechange}>
          <option value="" disabled>- Choose a car -</option>
          {brands.map((index) => {
            return (
            <option key={index.id} value={index.brand}>
              {index.brand}
            </option>)
          })}
        </select>
      </div>
      <div className="filtration-wrapper">
        <button className="filtration-btn">Find Your Vehicle</button>
      </div>
    </div>
  )
}

export default Filtration