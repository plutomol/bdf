import React from 'react'
import './home.css'
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <p className="success">Login successful.You are now logged in!</p>
      <div className="buttons">
        <button>Find Donors</button><br></br>
        <button>Look Campaigns</button>
      </div>
    </div>
  )
}

export default HomePage
