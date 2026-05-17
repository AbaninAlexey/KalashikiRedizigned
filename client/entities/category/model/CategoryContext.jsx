import { createContext, useEffect, useState } from 'react'
import categoriesApi from '@/entities/category/api/categoryApi'
import formatingCategories from '@/entities/category/lib/formatingCategories'

export const CategoryContext = createContext(null)

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await categoriesApi()
        setCategories(formatingCategories(data || []))
      } catch (e) {
        console.log(e.message)
      }
    }

    fetchData()
  }, [])

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryProvider
