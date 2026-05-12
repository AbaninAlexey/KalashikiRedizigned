import { useState, useEffect } from 'react'
import PostsApi from '@/widgets/Posts/api/PostsApi'
import localData from '@/widgets/Posts/constants/localData'

export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await PostsApi()

        if (data) {
          setPosts(data.posts)
        } else {
          setPosts(localData)
        }
      } catch (e) {
        console.error('Ошибка при загрузке постов:', e)
        setError('Ошибка сети')
      } finally {
        setIsLoading(false) // Скрываем лоадер в любом случае
      }
    }

    // Вызываем функцию только один раз
    loadPosts()
  }, []) // Пустой массив зависимостей гарантирует запуск только при монтировании

  return { posts, isLoading, error }
}
