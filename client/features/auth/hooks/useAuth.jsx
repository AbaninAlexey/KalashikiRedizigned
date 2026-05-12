import { useContext, useState } from 'react'
import AuthApi from '@/features/auth/api/AuthApi'
import { AuthContext } from '@/app/providers/AuthProvider/AuthContext'

const useAuth = () => {
  const [loginValue, setLoginValue] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {login} = useContext(AuthContext)

  const onSubmitButtonClick = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const data = await AuthApi(loginValue, password)

      login(data.token)

      setLoginValue('')
      setPassword('')

    } catch (error) {
      console.log(error.message)
      setError(error.message)
    }
  }
  return {
    loginValue,
    password,
    error,
    setLoginValue,
    setPassword,
    onSubmitButtonClick,
    setError,
  }
}

export default useAuth
