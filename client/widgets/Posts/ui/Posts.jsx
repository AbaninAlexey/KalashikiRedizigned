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

const Posts = (props) => {
  const { isHomePage } = props

  const posts = [
    {
      _id: 1,
      title: 'title',
      description:
        "'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.'",
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: img1,
    },
    {
      _id: 2,
      title: 'title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: img2,
    },
    {
      _id: 3,
      title: 'title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: img3,
    },
    {
      _id: 4,
      title: 'title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: img4,
    },
    {
      _id: 5,
      title: 'title 4',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: img5,
    },
    {
      _id: 6,
      title: 'title 5',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: img6,
    },
    {
      _id: 7,
      title: 'title 6',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: img7,
    },
    {
      _id: 8,
      title: 'title 7',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: img8,
    },
  ]

  const indexPost = Object.fromEntries(
    posts.map(({ _id, ...rest }) => [_id, rest])
  )

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    800: 2,
    500: 1,
  }

  const H2 = isHomePage ? 'h2' : 'h1'

  const [selectedPost, setSelectedPostId] = useState(null)

  const currentPost = posts.find(post => post._id === selectedPost)
  const currentIndex = posts.findIndex(post => post._id === selectedPost)

  const handleOpenModal = (_id) => {
    setSelectedPostId(_id)
  }

  const handleCloseModal = () => {
    setSelectedPostId(null)
  }

  const onLeftButtonClick = () => {
    if (currentIndex > 0) {
      setSelectedPostId(posts[currentIndex - 1]._id)
    } else {
      setSelectedPostId(posts[posts.length - 1]._id)
    }
  }

  const onRightButtonClick = () => {
    if (currentIndex < posts.length - 1) {
      setSelectedPostId(posts[currentIndex + 1]._id)
    } else {
      setSelectedPostId(posts[0]._id)
    }
  }

  return (
    <section className="container section" aria-labelledby="post-title">
      <H2 className="section__title visually-hidden" id="post-title">
        Посты на странице
      </H2>
      <Masonry
        className="posts"
        breakpointCols={breakpointColumnsObj}
        columnClassName="posts-grid_column"
      >
        {posts.map((item) => (
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
