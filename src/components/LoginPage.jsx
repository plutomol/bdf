import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css/LoginPage.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try {
      const response = await fetch('http://localhost/loginAction.php', {
        method: 'POST',
        body: formData,
      })

      const result = await response.text()

      if (response.ok && result.toLowerCase().includes('success')) {
        navigate('/home')
      } else {
        setMessage('Login failed. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setMessage('Unable to connect to the server.')
    }
  }

  return (
    <div>
      <h1>Blood Donor Finder</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p>Please sign in to continue.</p>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default LoginPage