import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/home')
    }
  }, [navigate])

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
        localStorage.setItem('isLoggedIn', 'true')
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
      <form className="form-container" onSubmit={handleSubmit}>
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
      {message && <p className="form-message">{message}</p>}
      <p>Please sign in to continue.</p>
      <Link to="/register"><u><p>Register</p></u></Link>
    </div>
  )
}

export default LoginPage