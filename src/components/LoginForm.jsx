import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import client from '../api/client'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // API call to backend
      const response = await client.post('/auth/login', {
        username,
        password
      })

      // store token
      localStorage.setItem('token', response.data.access_token)

      // redirect after login
      navigate('/students', { replace: true })

    } catch (err) {
      if (err.response) {
        setError(err.response.data.detail || 'Login failed')
      } else {
        setError('Server not reachable. Check backend.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>

        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading || !username || !password}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

      </form>

      <p>
        Don’t have an account?{' '}
        <Link to="/register">Register here</Link>
      </p>
    </div>
  )
}