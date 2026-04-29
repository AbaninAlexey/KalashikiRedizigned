import './Home.scss'
import Posts from '@/widgets/Posts'
import Hero from '@/widgets/Hero'

const Home = () => {
  return (
    <>
      <Hero />
      <Posts isHomePage />
    </>
  )
}

export default Home
