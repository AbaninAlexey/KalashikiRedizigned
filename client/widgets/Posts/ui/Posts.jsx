import Post from '@/entities/Post'
import './Posts.scss'
import Masonry from 'react-masonry-css'
import img1 from '@/assets/images/01.jpg'
import img2 from '@/assets/images/02.jpg'
import img3 from '@/assets/images/03.jpg'
import img4 from '@/assets/images/04.jpg'
import img5 from '@/assets/images/05.jpg'
import img6 from '@/assets/images/06.jpg'
import img7 from '@/assets/images/07.jpg'
import img8 from '@/assets/images/08.jpg'
import Modal from '@/shared/Modal'
import PostModal from '@/features/PostModal'
import { useState } from 'react'
import ErrorMessage from '@/shared/ErrorMessage'
import ControlsPanel from '@/widgets/ControlsPanel'

const Posts = (props) => {
  const { isHomePage } = props

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    800: 2,
    500: 1,
  }

  const breakpointColumnsObjGallery = {
    default: 2,
    1200: 2,
    800: 2,
    500: 1,
  }

  const H2 = isHomePage ? 'h2' : 'h1'

  // хук для отрисовки постов
  const [posts, setPosts] = useState([
    {
      _id: 1,
      title: 'title',
      description:
        "'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.'",
      date: '20.06.2023',
      category: 'Узоры',
      views: 150,
      image: img1,
    },
    {
      _id: 2,
      title: 'title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.02.2024',
      category: 'Акварель',
      views: 170,
      image: img2,
    },
    {
      _id: 3,
      title: 'title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '10.05.2023',
      category: 'Скетчи',
      views: 200,
      image: img3,
    },
    {
      _id: 4,
      title: 'title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '8.01.2022',
      category: 'Коллаж',
      views: 400,
      image: img4,
    },
    {
      _id: 5,
      title: 'title 4',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'Карандаш',
      views: 50,
      image: img5,
    },
    {
      _id: 6,
      title: 'title 5',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'Цифровая иллюстрация',
      views: 140,
      image: img6,
    },
    {
      _id: 7,
      title: 'title 6',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'Карандаш',
      views: 200,
      image: img7,
    },
    {
      _id: 8,
      title: 'title 7',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'Скетчи',
      views: 600,
      image: img8,
    },
  ])
  // Хук для открытия модалки поста
  const [selectedPost, setSelectedPostId] = useState(null)
  // Хул для сортировки постов
  const [sortValue, setSortValue] = useState('new')
  // Хук для фильтрации
  const [selectedCategories, setSelectedCategories] = useState([])

  // Функция переключения чекбоксов
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category)
      }

      return [...prevCategories, category]
    })
  }

  // Функция удаления фильтра
  const onCloseButtonClick = (category) => {
    setSelectedCategories((categories) => {
      return categories.filter((categoriesItem) => categoriesItem !== category)
    })
  }

  // Функция фильтрации
  const filteredPosts = posts.filter((post) => {
    if (selectedCategories.length === 0) {
      return true
    }

    return selectedCategories.includes(post.category)
  })

  // Функция сброса фильтрации
  const selectedCategoryReset = () => {
    setSelectedCategories([])
  }

  // Отсоритрованные посты
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortValue) {
      case 'new':
        return (
          new Date(b.date.split('.').reverse().join('-')) -
          new Date(a.date.split('.').reverse().join('-'))
        )

      case 'old':
        return (
          new Date(a.date.split('.').reverse().join('-')) -
          new Date(b.date.split('.').reverse().join('-'))
        )

      case 'moreViews':
        return b.views - a.views

      case 'lessViews':
        return a.views - b.views

      default:
        return 0
    }
  })

  const currentPost = sortedPosts.find((post) => post._id === selectedPost)
  const currentIndex = sortedPosts.findIndex(
    (post) => post._id === selectedPost
  )

  const handleOpenModal = (_id) => {
    setSelectedPostId(_id)
  }

  const handleCloseModal = () => {
    setSelectedPostId(null)
  }

  const onLeftButtonClick = () => {
    if (currentIndex > 0) {
      setSelectedPostId(sortedPosts[currentIndex - 1]._id)
    } else {
      setSelectedPostId(sortedPosts[posts.length - 1]._id)
    }
  }

  const onRightButtonClick = () => {
    if (currentIndex < posts.length - 1) {
      setSelectedPostId(sortedPosts[currentIndex + 1]._id)
    } else {
      setSelectedPostId(sortedPosts[0]._id)
    }
  }

  return (
    <section className="container section posts" aria-labelledby="posts-title">
      <H2 className="section__title visually-hidden" id="posts-title">
        Посты на странице
      </H2>
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
              key={item._id}
              onClick={() => handleOpenModal(item._id)}
              isHomePage={isHomePage}
              title={item.title}
              description={item.description}
              date={item.date}
              category={item.category}
              views={item.views}
              image={item.image}
            />
          ))}
        </Masonry>
      ) : (
        <ErrorMessage
          title="Работы не найдены"
          description="Выберите другую категорию или сбросьте фильтр"
          buttonLabel="Сбросить фильтр"
        />
      )}

      <Modal isOpen={selectedPost !== null} onClose={handleCloseModal}>
        {selectedPost !== null && (
          <PostModal
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
            category={currentPost.category}
            views={currentPost.views}
            title={currentPost.title}
            description={currentPost.description}
            imageSrc={currentPost.image}
            date={currentPost.date}
          />
        )}
      </Modal>
    </section>
  )
}

export default Posts
