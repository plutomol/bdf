import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      <p>This is your simple profile page.</p>
      <Link to="/home">Back to Home</Link>
    </div>
  )
}

export default Profile
