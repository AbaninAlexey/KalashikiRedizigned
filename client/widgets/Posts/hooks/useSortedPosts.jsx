import { useState } from 'react'

const useSortedPosts = (filteredPosts) => {
  const [sortValue, setSortValue] = useState('new')

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortValue) {
      case 'new':
        return new Date(b.created_at) - new Date(a.created_at)

      case 'old':
        return new Date(a.created_at) - new Date(b.created_at)

      case 'moreViews':
        return b.views - a.views

      case 'lessViews':
        return a.views - b.views

      default:
        return 0
    }
  })

  return {
    sortedPosts,
    sortValue,
    setSortValue,
  }
}

export default useSortedPosts