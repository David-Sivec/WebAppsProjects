import "./Contact.css"

function Contact() {
  return (
    <div className="contact">
      <p className="under-text">Found any bugs? Or want to help? Contact us!</p>
      <form>
        <input type="text" placeholder="Your name" className="name-input" required />
        <div className="input-bg-name"></div>
        <input type="email" placeholder="Your email" className="email-input" required />
        <div className="input-bg-email"></div>
        <textarea placeholder="Your message" className="text-area" required></textarea>
        <button className="submit-btn">Send</button>
      </form>
    </div>
  )
}

export default Contact