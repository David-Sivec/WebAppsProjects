import "./Filtration.css"
import { useState } from "react"

function Filtration() {
  const [selectedBrand, setSelectedBrand] = useState("")

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
    {id: 12, brand: "Aston Martin"}
  ]

  const handlechange = (event) => {
    setSelectedBrand(event.target.value)
  }

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