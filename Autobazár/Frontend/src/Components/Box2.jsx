import "./Box2.css"
import { Link } from "react-router-dom"

function Box2() {
  return (
    <div className="box2">
      {/* Add advertisement section */}
      <div className="add-advertisement-section">
        <h2 className="header">Add your Advertisement</h2>
        <div className="add-advertisement">
          <Link to="/myadvertisements" className="add-advertisement-btn">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path> </g></svg>
            Add advertisement
          </Link>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <div>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.9348 15.6583L18.6383 3.37924C18.2799 2.0442 16.6391 1.55235 15.603 2.46935L13.5253 4.30818C11.2132 6.35446 8.45556 7.83537 5.47068 8.63362C2.97216 9.30181 1.49142 11.8725 2.16089 14.3662C2.83037 16.8599 5.40053 18.3472 7.89906 17.679C10.8839 16.8807 14.014 16.787 17.0415 17.4054L19.762 17.961C21.1187 18.2381 22.2932 16.9933 21.9348 15.6583Z" stroke="#98CDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.71747 8L11.5 22" stroke="#98CDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h3>100 000</h3>
          </div>
          <p>Total advertisements</p>
        </div>
        <div className="card">
          <div>
            <svg width="55px" height="55px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 17H16M8 17C8 18.1046 7.10457 19 6 19C4.89543 19 4 18.1046 4 17M8 17C8 15.8954 7.10457 15 6 15C4.89543 15 4 15.8954 4 17M16 17C16 18.1046 16.8954 19 18 19C19.1046 19 20 18.1046 20 17M16 17C16 15.8954 16.8954 15 18 15C19.1046 15 20 15.8954 20 17M10 5V11M4 11L4.33152 9.01088C4.56901 7.58593 4.68776 6.87345 5.0433 6.3388C5.35671 5.8675 5.79705 5.49447 6.31346 5.26281C6.8993 5 7.6216 5 9.06621 5H12.4311C13.3703 5 13.8399 5 14.2662 5.12945C14.6436 5.24406 14.9946 5.43194 15.2993 5.68236C15.6435 5.96523 15.904 6.35597 16.425 7.13744L19 11M4 17H3.6C3.03995 17 2.75992 17 2.54601 16.891C2.35785 16.7951 2.20487 16.6422 2.10899 16.454C2 16.2401 2 15.9601 2 15.4V14.2C2 13.0799 2 12.5198 2.21799 12.092C2.40973 11.7157 2.71569 11.4097 3.09202 11.218C3.51984 11 4.0799 11 5.2 11H17.2C17.9432 11 18.3148 11 18.6257 11.0492C20.3373 11.3203 21.6797 12.6627 21.9508 14.3743C22 14.6852 22 15.0568 22 15.8C22 15.9858 22 16.0787 21.9877 16.1564C21.9199 16.5843 21.5843 16.9199 21.1564 16.9877C21.0787 17 20.9858 17 20.8 17H20" stroke="#98CDFF" stroke-width="1.56" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h3>50+</h3>
          </div>
          <p>Brands to choose from</p>
        </div>
        <div className="card">
          <div>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.6311 7.15517C15.9018 7.05482 16.1945 7 16.5001 7C17.8808 7 19.0001 8.11929 19.0001 9.5C19.0001 10.8807 17.8808 12 16.5001 12C16.1945 12 15.9018 11.9452 15.6311 11.8448" stroke="#98CDFF" stroke-width="1.56" stroke-linecap="round"></path> <path d="M3 19C3.69137 16.6928 5.46998 16 9.5 16C13.53 16 15.3086 16.6928 16 19" stroke="#98CDFF" stroke-width="1.56" stroke-linecap="round"></path> <path d="M17 15C19.403 15.095 20.5292 15.6383 21 17" stroke="#98CDFF" stroke-width="1.56" stroke-linecap="round"></path> <path d="M13 9.5C13 11.433 11.433 13 9.5 13C7.567 13 6 11.433 6 9.5C6 7.567 7.567 6 9.5 6C11.433 6 13 7.567 13 9.5Z" stroke="#98CDFF" stroke-width="1.56"></path> </g></svg>
            <h3>30</h3>
          </div>
          <p>All users on platform</p>
        </div>
        <div className="card">
          <div>
            <svg fill="#98CDFF" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#98CDFF" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,22a1,1,0,0,0,.707-.293l9-9a1,1,0,0,0,.29-.784l-.643-8.357a1,1,0,0,0-.92-.921L12.077,2a1,1,0,0,0-.784.29l-9,9a1,1,0,0,0,0,1.414l9,9A1,1,0,0,0,12,22Zm.382-17.968,7.044.542.542,7.044L12,19.586,4.414,12Zm2.061,5.525a2,2,0,1,1,2.828,0A2,2,0,0,1,14.443,9.557Z"></path></g></svg>
            <h3>50,000€</h3>
          </div>
          <p>Avarage price of vehicle</p>
        </div>
      </div>
    </div>
  )
}

export default Box2