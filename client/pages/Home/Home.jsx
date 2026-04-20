import './Home.scss'
import Posts from '@/widgets/Posts'
import Hero from '@/widgets/Hero'
import Modal from '@/shared/Modal'
import PostModal from '@/features/PostModal'

const Home = () => {
  return (
    <>
      <Hero />
      <Posts isHomePage />
    </>
  )
}

export default Home
