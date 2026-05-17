import { useContext } from 'react'
import { CategoryContext } from '@/entities/category/model/CategoryContext'

export const useCategory = () => {
  const { categories } = useContext(CategoryContext)
  return categories
}
