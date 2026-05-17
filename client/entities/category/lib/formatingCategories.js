const formatingCategories = (categories) => {
  return categories.map((category) => ({
    value: category.id,
    label: category.name,
  }))
}

export default formatingCategories
