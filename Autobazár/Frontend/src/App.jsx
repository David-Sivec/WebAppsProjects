//css imports
import './App.css'
//imports components for subpages
import Vehicles from "./Links/Vehicles"
import MyAdvertisements from "./Links/MyAdvertisements"
import Contact from "./Links/Contact"
import Login from "./Links/Login"
//imports components for main page
import Navigation from './Components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <h1>This is CarConnect site</h1>
      <Vehicles />
      <MyAdvertisements />
      <Contact />
      <Login />
    </>
  )
}

export default App
