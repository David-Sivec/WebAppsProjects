import { Link } from 'react-router-dom'
import './Navigation.css'
import { useState } from 'react'

function Navigation() {

  const [isSidebarOpen, setisSidebarOpen] = useState(false)

  const toogleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/" className='logo'>
            <img src="./images/logo.png" alt="" className='img' />
          </Link>
        </div>
        <div className="links">
          <Link to="/vehicles" className='link'>Vehicles</Link>
          <Link to="/my-advertisements" className='link'>My Advertisements</Link>
          <Link to="/contact" className='link'>Contact</Link>
          <Link to="/login" className='link'>Log in</Link>
          <div className={`menu ${isSidebarOpen ? "open" : ""}`} onClick={toogleSidebar}>
            <span className='menu-line line-1'></span>
            <span className='menu-line line-2'></span>
            <span className='menu-line line-3'></span>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/vehicles" className='line'>Vehicles</Link>
        <Link to="/my-advertisements" className='line'>My Advertisements</Link>
        <Link to="/contact" className='line'>Contact</Link>
        <Link to="/login" className='line'>Log in</Link>
      </div>
    </div>
  )
}

export default Navigation