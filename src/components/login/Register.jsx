import { Link } from "react-router-dom"
import './login.css'
function Register() {
    return (
        <div>
            <h1>Register</h1>
            <p>Please sign up to continue.</p>
            <Link to ="/login"><p>Login</p></Link>
        </div>
    )
}

export default Register