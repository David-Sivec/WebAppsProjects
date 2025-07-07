//css imports
import "./bricks.css"
//imports components for infinite scroll
import InfiniteScroll from "../Components/InfiniteScroll"
import BestAdvertisements from "../Components/BestAdvertisements"
import Box2 from "../Components/Box2"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

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
          <div className="filtration">
            hi
          </div>
        </div>
        {/* Best advertisements section */}
        <BestAdvertisements />
        {/* Cards section showcasing numbers */}
        <Box2 />
        {/* Infinite scroll section with vehicle brands */}
        <InfiniteScroll />
        {/* Recensions section with user reviews */}
        <h2>Recensions</h2>
        <div className="recensions">
          <div className="recension">hi</div>
          <div className="recension">hi</div>
        </div>
        {/* Contact form section */}
        <h2>Contact formular</h2>
        <Contact />
      </div>
      {/* Footer section */}
      <Footer />
    </div>
  )
}

export default HomePage