import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage.jsx'
import Register from './components/Register.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
