//css imports
import "./bricks.css"
//imports components for homepage
import Filtration from "../Components/Filtration"
import InfiniteScroll from "../Components/InfiniteScroll"
import VehicleTypes from "../Components/VehicleTypes"
import Box2 from "../Components/Box2"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
//imports
import { Link } from "react-router-dom"

function HomePage() {
  //is a platform designed to connect car enthusiasts, buyers, and sellers. Whether you're looking to buy your dream car, sell your vehicle, or simply explore the automotive world, CarConnect has you covered.

  return(
    <div className="homepage">
      {/* HomePage component serves as the main landing page for the CarConnect platform. It features an introduction, best advertisements, a card section, an advertisement submission area, infinite scroll for more content, recensions, and a contact form. */}
      <div className="wrapper">
        {/* Introduction section with a title and description and filtration */}
        <div className="introduction">
          <h1>CarConnect</h1>
          <p className="text">Buy and sell cars easily with our community-driven online marketplace.</p>
          {/* Filtration section */}
          <Filtration />
        </div>
        {/* Best advertisements section */}
        <VehicleTypes />
        {/* Cards section showcasing numbers */}
        <Box2 />
        {/* Infinite scroll section with vehicle brands */}
        <h2>Top brands</h2>
        <InfiniteScroll />
        {/* Recensions section with user reviews */}
        <h2>Recensions</h2>
        <div className="recensions">
          <div className="recension">
            <div>
              <img src="./images/profile-picture.png" alt="" className="profile-picture" />
              <h3>John Doe</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit aliquid labore ad? Nobis quia voluptatem praesentium dolore fugit sapiente facere, amet eaque ratione accusamus impedit, autem quibusdam sed rerum.</p>
            </div>
          </div>
          <div className="recension">
            <div>
              <img src="./images/profile-picture.png" alt="" className="profile-picture" />
              <h3>Adam Novak</h3>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit aliquid labore ad? Nobis quia voluptatem praesentium dolore fugit sapiente facere, amet eaque ratione accusamus impedit, autem quibusdam sed rerum.</p>
            </div>
          </div>
        </div>
        <Link to="/recensions" className="recension-btn">More recensions</Link>
        {/* Contact form section */}
        <h2>Contact us</h2>
        <Contact />
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default HomePage