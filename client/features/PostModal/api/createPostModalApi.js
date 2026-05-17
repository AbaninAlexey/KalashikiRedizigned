import API_URL from '@/shared/api/config'

const CreatePostModalApi = async (title, description, category_id, image, token) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('description', description)
  formData.append('category_id', category_id || "1")

  if (image) {
    formData.append('image', image)
  }

  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Ошибка загрузки данных')
  }

  return response.json()
}

export default CreatePostModalApi
