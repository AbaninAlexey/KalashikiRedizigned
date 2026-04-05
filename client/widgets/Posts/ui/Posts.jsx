import Post from "@/entities/Post"
import Section from "@/widgets/Section/"

const Posts = () => {
  const posts = [
    {
      title: 'title',
      description: 'description',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
    },
    {
      title: 'title 1',
      description: 'description 1',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
    },
    {
      title: 'title 2',
      description: 'description 2',
      date: '20.05.2026',
      category: 'digital',
      views: '100',
    },
  ]

  return (
    <Section className="container">
      <ul className="post-list">
        {posts.map((item, index) => (
          <Post
            title={item.title}
            description={item.description}
            date={item.date}
            category={item.category}
            views={item.views}
            key={index}
          />
        ))}
      </ul>
    </Section>
  )
}

export default Posts
