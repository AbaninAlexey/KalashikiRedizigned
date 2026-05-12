import { useState } from 'react'

const UsePostsModal = (sortedPosts) => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  const handleOpenModal = (id) => {
    setSelectedPostId(id)
  }

  const handleCloseModal = () => {
    setSelectedPostId(null)
  }

  const currentPost = sortedPosts.find((post) => post.id === selectedPostId)
  const currentIndex = sortedPosts.findIndex(
    (post) => post.id === selectedPostId
  )

  const onLeftButtonClick = () => {
    if (currentIndex > 0) {
      setSelectedPostId(sortedPosts[currentIndex - 1].id)
    } else {
      setSelectedPostId(sortedPosts[sortedPosts.length - 1].id)
    }
  }

  const onRightButtonClick = () => {
    if (currentIndex < sortedPosts.length - 1) {
      setSelectedPostId(sortedPosts[currentIndex + 1].id)
    } else {
      setSelectedPostId(sortedPosts[0].id)
    }
  }

  return {
    selectedPostId,
    currentPost,
    handleOpenModal,
    handleCloseModal,
    onLeftButtonClick,
    onRightButtonClick,
  }
}

export default UsePostsModal