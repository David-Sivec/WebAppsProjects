import './App.css'
import Vehicles from "./bricks/Vehicles"
import MyAdvertisements from "./bricks/MyAdvertisements"
import Contact from "./bricks/Contact"
import Login from "./bricks/Login"

function App() {
  return (
    <>
      <h1>This is CarConnect site</h1>
      <Vehicles />
      <MyAdvertisements />
      <Contact />
      <Login />
    </>
  )
}

export default App
