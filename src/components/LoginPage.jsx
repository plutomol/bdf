import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <h1>Blood Donor Finder</h1>
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <br></br>
      <input type="password" placeholder="Password" />
      <br></br>
      <button>Login</button>
      <p>Please sign in to continue.</p>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default LoginPage