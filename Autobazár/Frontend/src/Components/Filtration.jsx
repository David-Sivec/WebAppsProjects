import "./Filtration.css"
import { useState, useEffect } from "react"
import models from "../Models"

function Filtration() {
  const [selectedBrand, setSelectedBrand] = useState("")
  const [filteredModels, setFilteredModels] = useState([])
  const [selectedModel, setSelectedModel] = useState('');
  

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

  return (
    <div className="filtration">
      <div className="filtration-header">
        <div className="header-vehicle">🚗</div>
        <div className="header-vehicle">🚐</div>
        <div className="header-vehicle">🚲</div>
        <div className="header-vehicle">🏍️</div>
      </div>
      <h2>Find your dream vehicle</h2>
      <div className="filtration-wrapper">
        <select className="selection" value={selectedBrand} onChange={handlechange} key={selectedBrand}>
          <option value="" disabled>- Choose a car -</option>
          {brands.map((index) => {
            return (
            <option key={index.id} value={index.id}>
              {index.brand}
            </option>)
          })}
        </select>
        <select className="selection" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedBrand}>
          <option value="" disabled>- Choose a model -</option>
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