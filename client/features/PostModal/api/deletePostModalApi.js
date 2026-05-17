import API_URL from '@/shared/api/config'

const DeletePostModalApi = async (token, id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: token,
    }
  })

  if (!response.ok) {
    throw new Error(`Ошибка удаления поста: ${response.status}`)
  }

  return response.json()
}

export default DeletePostModalApi
