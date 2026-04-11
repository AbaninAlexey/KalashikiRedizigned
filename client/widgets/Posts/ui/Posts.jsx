import Post from '@/entities/Post'
import './Posts.scss'
import Masonry from 'react-masonry-css'

const Posts = (props) => {
  const {isHomePage} = props

  const posts = [
    {
      title: 'title',
      description:
        "'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.'",
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: './client/assets/images/01.jpg',
    },
    {
      title: 'title 1',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: './client/assets/images/02.jpg',
    },
    {
      title: 'title 2',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
      image: './client/assets/images/03.jpg',
    },
    {
      title: 'title 3',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: './client/assets/images/04.jpg',
    },
    {
      title: 'title 4',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: './client/assets/images/05.jpg',
    },
    {
      title: 'title 5',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: './client/assets/images/06.jpg',
    },
    {
      title: 'title 6',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: './client/assets/images/07.jpg',
    },
    {
      title: 'title 7',
      description:
        'Lorem ipsum dolor sit amet consectetur. Sed faucibus morbi viverddra tortor neque. Lorem ipsum dolor sit amet consectetur.',
      date: '20.05.2026',
      category: 'digital',
      views: '200',
      image: './client/assets/images/08.jpg',
    },
  ]

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    800: 2,
    500: 1,
  }

  const H2 = isHomePage ? "h2" : "h1"

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
        {posts.map((item, index) => (
          <Post
            isHomePage={isHomePage}
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            category={item.category}
            views={item.views}
            image={item.image}
          />
        ))}
      </Masonry>
    </section>
  )
}

export default Posts
