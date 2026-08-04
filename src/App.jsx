import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/login/LoginPage.jsx'
import Register from './components/login/Register.jsx'
import HomePage from './components/homepage/HomePage.jsx'
import Profile from './components/profile/Profile.jsx'

function ProtectedRoute({ children }) {
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('isLoggedIn') === 'true'

  return isLoggedIn ? children : <Navigate to="/login" replace />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
