import API_URL from '@/shared/api/config'

const categoriesApi = async () => {
  try {
    const res = await fetch(`${API_URL}/categories`)
    if (res.ok) {
      const categoriesData = await res.json()
      return categoriesData.categories
    }
  } catch (e) {
    console.log(e.message)
  }
}

export default categoriesApi
