import './PostModal.scss'
import classNames from 'classnames'
import Button from '@/shared/Button'
import Views from '@/shared/Views'
import ArrowLeft from '/client/assets/icons/arrow-left.svg?react'
import ArrowRight from '/client/assets/icons/arrow-right.svg?react'
import Cross from '/client/assets/icons/cross.svg?react'

const PostModal = (props) => {
  const {
    onClick,
    className,
    category,
    title,
    description,
    imageSrc,
    date,
    views,
    onLeftButtonClick,
    onRightButtonClick,
  } = props

  return (
    <div className={classNames(className, 'post-modal')}>
      <Button
        onClick={onLeftButtonClick}
        className="post-modal__button post-modal__button--left"
        iconName={ArrowLeft}
        mode="circle"
      />
      <div className="post-modal__main">
        <div className="post-modal__image-wrapper">
          <img className="post-modal__image" src={imageSrc} alt="" />
        </div>
        <div className="post-modal__body">
          <div className="post-modal__info">
            <div className="post-modal__category">
              <span className="post-modal__category-text">{category}</span>
              <span className="post-modal__category-button-wrapper visible-tablet">
                <Button
                  className="post-modal__category-button"
                  iconName={Cross}
                  onClick={onClick}
                  mode="transparent"
                />
              </span>
            </div>
            <h3 className="post-modal__title">{title}</h3>
            <div className="post-modal__description">
              <p>{description}</p>
            </div>
            <div className="post-modal__extra">
              <span className="post-modal__date">{date}</span>
              <Views views={views} />
            </div>
          </div>

          {/*<div className="post-modal__controls">*/}
          {/*  <Button label="Редактировать" mode="dark" />*/}
          {/*  <Button label="Удалить" />*/}
          {/*</div>*/}
        </div>
      </div>
      <Button
        onClick={onRightButtonClick}
        className="post-modal__button post-modal__button--right"
        iconName={ArrowRight}
        mode="circle"
      />
    </div>
  )
}

export default PostModal
