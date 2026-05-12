import { useEffect, useState } from 'react'
import { AuthContext } from '@/app/providers/AuthProvider/AuthContext'
import { useNavigate } from 'react-router-dom'

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [isAdmin, setIsAdmin] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const savedToken = localStorage.getItem('token')

    if (savedToken) {
      setToken(savedToken)
      setIsAdmin(true)
    }
  }, [])

  const login = (token) => {
    localStorage.setItem('token', token)
    setToken(token)
    setIsAdmin(true)
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAdmin(false)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        isAdmin,
        isAuth: Boolean(token),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider