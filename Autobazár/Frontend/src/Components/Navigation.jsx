import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  let count = 0

  function sidebar() {
    const menu = document.querySelector(".menu")
    const sidebar1 = document.querySelector(".sidebar")
    menu.addEventListener("click", () => {
      if (count === 0) {
      sidebar1.style.right = "0"
      count = 1
      console.log(count);
      
      }
      else {
        sidebar1.style.right = "-300px"
        count = 0
        console.log(count);
        
      }
    })
  }  

  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/" className='logo'>CarConnect</Link>
        </div>
        <div className="links">
          <Link to="/vehicles" className='link'>Vehicles</Link>
          <Link to="/my-advertisements" className='link'>My Advertisements</Link>
          <Link to="/contact" className='link'>Contact</Link>
          <Link to="/login" className='link'>Log in</Link>
          <div className="menu" onClick={sidebar}>
            <span></span>
            <span className='span'></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className="sidebar">
        <Link to="/vehicles" className='line'></Link>
        <Link to="/my-advertisements" className='line'></Link>
        <Link to="/contact" className='line'></Link>
        <Link to="/login" className='line'></Link>
      </div>
    </div>
  )
}

export default Navigation