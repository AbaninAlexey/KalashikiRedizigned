import API_URL from '@/shared/api/config'

const GetPostsApi = async () => {
  try {
    const response = await fetch(`${API_URL}/posts`)
    if (!response.ok) throw new Error('Ошибка загрузки постов')
    return await response.json()
  } catch (e) {
    console.error('Ошибка', e.message)
    return null
  }
}

export default GetPostsApi
