import './Hero.scss'
import cats from "@/assets/images/cats.png"
import author from '@/assets/images/author.png'
import authorWithCats from '@/assets/images/author-with-cats.png'

const Hero = () => {

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={authorWithCats}
        alt="cats"
        width="266"
        height="464"
      />
      <img
        className="hero__cats"
        src={cats}
        alt="cats"
        width="266"
        height="464"
      />
      <div className="hero__wrapper">
        <h1 className="hero__title" id="hero-title">
          Привет! Меня зовут Аня Калашникова, <br /> я художник из России
        </h1>
        <p className="hero__description">
          Очень люблю скетчи и много рисую в этой технике, но также работаю с
          другими техниками и материалами. В этой галерее вы найдёте мои работы
          в разном исполнении
        </p>
      </div>
      <img
        className="hero__cats"
        src={author}
        alt="cats"
        width="266"
        height="464"
      />
    </section>
  )
}

export default Hero
