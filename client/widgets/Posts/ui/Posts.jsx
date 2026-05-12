import Post from '@/entities/Post'
import './Posts.scss'
import Masonry from 'react-masonry-css'
import Modal from '@/shared/Modal'
import PostModal from '@/features/PostModal'
import ErrorMessage from '@/shared/ErrorMessage'
import ControlsPanel from '@/widgets/ControlsPanel'
import { usePosts } from '@/widgets/Posts/hooks/usePosts'
import usePostsModal from '@/widgets/Posts/hooks/usePostsModal'
import {
  breakpointColumnsObj,
  breakpointColumnsObjGallery,
} from '@/widgets/Posts/constants/mansorySettings'
import useSortedPosts from '@/widgets/Posts/hooks/useSortedPosts'
import useFilteredPosts from '@/widgets/Posts/hooks/useFilteredPosts'

const Posts = (props) => {
  const { isHomePage } = props

  const Title = isHomePage ? 'h2' : 'h1'

  //кастомный хук для отрисовки постов
  const { posts, isLoading, error } = usePosts()

  // кастомный хук для фильтрации
  const {
    filteredPosts,
    selectedCategories,
    handleCategoryChange,
    onCloseButtonClick,
    selectedCategoryReset,
  } = useFilteredPosts(posts)

  // кастомный хук для сортировки постов
  const { sortedPosts, sortValue, setSortValue } = useSortedPosts(filteredPosts)

  // кастомный хук для открытия модалки поста
  const {
    selectedPostId,
    currentPost,
    handleOpenModal,
    handleCloseModal,
    onLeftButtonClick,
    onRightButtonClick,
  } = usePostsModal(sortedPosts, posts)

  return (
    <section className="container section posts" aria-labelledby="posts-title">
      <Title className="section__title visually-hidden" id="posts-title">
        Посты на странице
      </Title>

      {!isHomePage && (
        <ControlsPanel
          sortValue={sortValue}
          onSortChange={setSortValue}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
          onResetButtonClick={selectedCategoryReset}
          onCloseButtonClick={onCloseButtonClick}
        />
      )}

      {isLoading && <h1 style={{ textAlign: 'center' }}>Загрузка...</h1>}

      {error && !isLoading && (
        <ErrorMessage
          title="Ошибка загрузки"
          description={error}
          buttonLabel="Повторить"
          onButtonClick={() => window.location.reload()} // Простой способ повторить запрос
        />
      )}

      {sortedPosts.length ? (
        <Masonry
          className="posts__masonry"
          breakpointCols={
            isHomePage ? breakpointColumnsObj : breakpointColumnsObjGallery
          }
          columnClassName="posts-grid_column"
        >
          {(isHomePage ? posts : sortedPosts).map((item) => (
            <Post
              key={item.id}
              onClick={() => handleOpenModal(item.id)}
              isHomePage={isHomePage}
              title={item.title}
              description={item.description}
              date={item.date}
              category={item.category_name}
              views={item.views}
              image={item.image_url}
            />
          ))}
        </Masonry>
      ) : null}

      <Modal isOpen={selectedPostId !== null} onClose={handleCloseModal}>
        {selectedPostId !== null && (
          <PostModal
            onClick={handleCloseModal}
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
            category={currentPost.category_name}
            views={currentPost.views}
            title={currentPost.title}
            description={currentPost.description}
            imageSrc={currentPost.image_url}
            date={currentPost.date}
          />
        )}
      </Modal>
    </section>
  )
}

export default Posts
