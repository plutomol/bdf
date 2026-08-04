import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bloodGroup: '',
    address: '',
    phone: '',
    gender: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })

    try {
      const response = await fetch('http://localhost/registerAction.php', {
        method: 'POST',
        mode: 'cors',
        body: formDataToSend,
      })

      const text = await response.text()
      let result = {}

      try {
        result = JSON.parse(text)
      } catch {
        result = { message: text || 'Something went wrong.' }
      }

      setMessage(result.message || 'Something went wrong.')
    } catch (error) {
      console.error(error)
      setMessage('Unable to connect to the server.')
    }
  }

  return (
    <div className="form-container">
      <h1>Register</h1>
      <p>Please sign up to continue.</p>

      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required>
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {message && <p className="form-message">{message}</p>}

      <Link to="/login"><p>Already have an account? Login</p></Link>
    </div>
  )
}

export default Register