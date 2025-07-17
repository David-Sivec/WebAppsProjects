//css imports
import './App.css'
//imports components for subpages
import HomePage from "./Links/HomePage"
import Vehicles from "./Links/Vehicles"
import MyAdvertisements from "./Links/MyAdvertisemets"
import Contact from "./Links/Contact"
import Login from "./Links/Login"
import Recensions from "./Links/Recensions"
import AdDetails from "./Links/AdDetails"
//imports components for main page
import Navigation from './Components/Navigation'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/*navigation component*/}
      <Navigation />
      <p>Čau uz som tu. Let's gooooooooooooooooo.</p>
      {/*routes for the links*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicles/ad/:id" element={<AdDetails />} />
        <Route path="/my-advertisements" element={<MyAdvertisements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recensions" element={<Recensions />} />
      </Routes>
    </>
  )
}

export default App
