import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <div className="logo">CarConnect</div>
      <div className="links">
        <Link to="/">Domov</Link>
        <Link to="/vehicles">Vozidlá</Link>
        <Link to="/my-advertisements">Moje inzeráty</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/login">Prihlásenie</Link>
      </div>
    </nav>
  )
}

export default Navigation