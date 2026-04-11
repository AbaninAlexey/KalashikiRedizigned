import './Hero.scss'

const Hero = (props) => {
  const { className } = props

  return (
    <section className="hero container">
      <img
        className="hero__cats"
        src="./client/assets/images/cats.svg"
        alt="cats"
        width="266"
        height="464"
      />
      <div className="hero__wrapper">
        <h1 className="hero__title">
          Привет! Меня зовут Аня Калашникова, <br/> я художник из России
        </h1>
        <p className="hero__description">
          Очень люблю скетчи и много рисую в этой технике, но также работаю с
          другими техниками и материалами. В этой галерее вы найдёте мои работы в
          разном исполнении
        </p>
      </div>
      <img
        className="hero__cats"
        src="./client/assets/images/author.svg"
        alt="cats"
        width="266"
        height="464"
      />
    </section>
  )
}

export default Hero
