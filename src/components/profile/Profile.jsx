import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../../assets/pp.jpg'
import './profile.css'

function Profile() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('Loading profile...')

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await fetch('http://localhost/profile.php', {
          credentials: 'include',
        })
        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.message || 'Unable to load profile.')
        }

        setUser(result.user)
        setMessage('')
      } catch (error) {
        console.error(error)
        setMessage(error.message || 'Unable to load profile.')
      }
    }

    loadProfile()
  }, [])

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {message && <p>{message}</p>}
      {user && (
        <div className="profile-details">
          <img className="profile-avatar" src={avatar} alt="Profile" />
          <p className="profile-name">{user.name}</p>
          <p className="profile-email">{user.email}</p>
        </div>
      )}
      <Link className="profile-back-link" to="/home">Back to Home</Link>
    </div>
  )
}

export default Profile
