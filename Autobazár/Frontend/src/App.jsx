//css imports
import './App.css'
//imports components for subpages
import HomePage from "./Links/HomePage"
import Vehicles from "./Links/Vehicles"
import MyAdvertisements from "./Links/MyAdvertisemets"
import Contact from "./Links/Contact"
import Login from "./Links/Login"
//imports components for main page
import Navigation from './Components/Navigation'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/*navigation component*/}
      <Navigation />
      {/*routes for the links*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/my-advertisements" element={<MyAdvertisements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
