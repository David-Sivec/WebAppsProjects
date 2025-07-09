import "./InfiniteScroll.css"

function InfiniteScroll() {
  return (
    <div className="infinite-scroll">
      <div className="brands">
        <div className="brand b1">
          <img src="./brands/skoda.png" alt="" className="i-s-img2" />
        </div>
        <div className="brand b2">
          <img src="./brands/audi.png" alt="" className="i-s-img2" />
        </div>
        <div className="brand b3">
          <img src="./brands/bmw.png" alt="" className="i-s-img" />
          <p>BMW</p>
        </div>
        <div className="brand b4">
          <img src="./brands/mercedes.png" alt="" className="i-s-img" />
          <p>Mercedes</p>
        </div>
        <div className="brand b5">
          <img src="./brands/vw.png" alt="" className="i-s-img" />
          <p>Volkswagen</p>
        </div>
      </div>
      <div className="brands">
        <div className="brand2 b1">
          <img src="./brands/ferrari.png" alt="" className="i-s-img" />
          <p>Ferrari</p>
        </div>
        <div className="brand2 b2">
          <img src="./brands/lamborghini.png" alt="" className="i-s-img" />
          <p>Lamborghini</p>
        </div>
        <div className="brand2 b3">
          <img src="./brands/koeingsegg.png" alt="" className="i-s-img2" />
        </div>
        <div className="brand2 b4">
          <img src="./brands/porsche.png" alt="" className="i-s-img2" />
        </div>
        <div className="brand2 b5">
          <img src="./brands/aston_martin.png" alt="" className="i-s-img2" />
        </div>
      </div>
      <div className="brands">
        <div className="brand b1">
          <img src="./brands/maserati.png" alt="" className="i-s-img" />
          <p>Maserati</p>
        </div>
        <div className="brand b2">
          <img src="./brands/toyota.png" alt="" className="i-s-img" />
          <p>Toyota</p>
        </div>
        <div className="brand b3">
          <img src="./brands/ford.png" alt="" className="i-s-img2" />
        </div>
        <div className="brand b4">
          <img src="./brands/jaguar.png" alt="" className="i-s-img" />
          <p>Jaguar</p>
        </div>
        <div className="brand b5">
          <img src="./brands/volvo.png" alt="" className="i-s-img" />
          <p>Volvo</p>
        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll