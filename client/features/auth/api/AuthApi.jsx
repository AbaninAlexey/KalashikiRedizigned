import API_URL from '@/shared/api/config'

const AuthApi = async (login, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emailbody: login,
      passwordbody: password,
    }),
  })

  if (!response.ok) {
    throw new Error('Неправильный логин или пароль')
  }

  const data = response.json()
  return data
}

export default AuthApi
