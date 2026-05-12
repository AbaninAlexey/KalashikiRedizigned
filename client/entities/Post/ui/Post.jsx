import Views from '@/shared/Views'
import "./Post.scss"
import API_URL from '@/shared/api/config'

const Post = (props) => {
  const {
    title,
    description,
    image,
    date,
    views,
    category,
    isHomePage,
    onClick,
  } = props

  return (
    <>
      <article className="post">
        <img
          className="post__image"
          src={`${API_URL}${image}`}
          alt=""
          width=""
          height=""
          onClick={onClick}
        />
        {isHomePage && (
          <div className="post__wrapper">
            <div className="post__container">
              <h3 className="post__title">{title}</h3>
              <div className="post__description">
                <p>{description}</p>
              </div>
            </div>
            <div className="post__extra">
              <span className="post__category">{category}</span>
              <span className="post__date">{date}</span>
              <div className="post__views-wrapper">
                <Views views={views} />
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  )
}

export default Post
