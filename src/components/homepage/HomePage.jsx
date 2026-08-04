import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import bdfpic from '../../assets/bdfpic.jpg'

function HomePage() {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="nav-left">BDF</div>
        <div className="nav-right">
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-left">
          <h1>Blood Donor Finder</h1>
          <p className="success">Login successful. You are now logged in!</p>
          <div className="buttons">
            <button>Find Donors</button>
            <button>Look Campaigns</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={bdfpic} alt="Online blood donation" />
        </div>
      </div>

      <section id="about" className="info-section">
        <h2>About Us</h2>
        <p>We help connect blood donors and recipients quickly and easily through a simple online platform.</p>
      </section>

      <section id="contact" className="info-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to our team anytime.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p><a href="#about">About Us</a></p>
        <p><a href="#contact">Contact Us</a></p>
        <p>© 2026 BDF. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default HomePage
