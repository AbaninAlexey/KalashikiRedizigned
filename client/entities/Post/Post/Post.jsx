import "./Post.scss"

const Post = (props) => {
  const { title, description, image, date, views, category } = props

  return (
    <>
      <card className="post">
        <img className="post__image" src="" alt="" width="" height="" />
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
              <span className="post__views">{views}</span>
            </div>
          </div>
        </div>
      </card>
    </>
  )
}

export default Post
