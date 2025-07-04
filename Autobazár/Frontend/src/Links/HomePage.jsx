//css imports
import "./bricks.css"

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
        <div className="best-advertisements">
          <h2>Best advertisements</h2>
        </div>
        {/* Cards section showcasing numbers */}
        <div className="box2">
          {/* Add advertisement section */}
          <div className="add-advertisement-section">
            <h2 className="header">Add your Advertisement</h2>
            <div className="add-advertisement">
              hi
            </div>
          </div>
          <div className="cards">
            <div className="card">hi</div>
            <div className="card">hi</div>
            <div className="card">hi</div>
            <div className="card">hi</div>
          </div>
        </div>
        {/* Infinite scroll section with vehicle brands */}
        <div className="infinite-scroll">
          hi
        </div>
        {/* Recensions section with user reviews */}
        <h2>Recensions</h2>
        <div className="recensions">
          <div className="recension">hi</div>
          <div className="recension">hi</div>
        </div>
        {/* Contact form section */}
        <h2>Contact formular</h2>
        <div className="contact"></div>
      </div>
      {/* Footer section */}
      <div className="footer">
        footer
      </div>
    </div>
  )
}

export default HomePage