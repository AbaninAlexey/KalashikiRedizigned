import { useState } from 'react'

const useFilteredPosts = (posts) => {
  const [selectedCategories, setSelectedCategories] = useState([])

  const filteredPosts = posts.filter((post) => {
    if (selectedCategories.length === 0) {
      return true
    }

    return selectedCategories.includes(post.category)
  })

  // Функция удаления фильтра
  const onCloseButtonClick = (category) => {
    setSelectedCategories((categories) => {
      return categories.filter((categoriesItem) => categoriesItem !== category)
    })
  }

  // Функция сброса фильтрации
  const selectedCategoryReset = () => {
    setSelectedCategories([])
  }

  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category)
      }

      return [...prevCategories, category]
    })
  }

  return {
    handleCategoryChange,
    onCloseButtonClick,
    selectedCategoryReset,
    filteredPosts,
    selectedCategories,
    setSelectedCategories,
  }
}

export default useFilteredPosts