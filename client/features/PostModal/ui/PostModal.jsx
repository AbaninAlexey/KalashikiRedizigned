import '../PostModal.scss'
import classNames from 'classnames'
import Button from '@/shared/Button'
import Views from '@/shared/Views'
import ArrowLeft from '/client/assets/icons/arrow-left.svg?react'
import ArrowRight from '/client/assets/icons/arrow-right.svg?react'
import Cross from '/client/assets/icons/cross.svg?react'
import API_URL from '@/shared/api/config'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/app/providers/AuthProvider/AuthContext'
import SelectDropdown from '@/shared/SelectDropdown'
import DropImage from '@/features/DropImage'
import CreatePostModalApi from '@/features/PostModal/api/createPostModalApi'
import ModalInfo from '@/shared/ModalInfo'
import Loader from '@/shared/Loader'
import DeletePostModalApi from '@/features/PostModal/api/deletePostModalApi'

const PostModal = (props) => {
  const { isAdmin, token } = useContext(AuthContext)

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
    isNewPostModal = false,
    categories,
    id,
    onCloseModal,
  } = props

  //состояние успеха или провала операции
  const [isSuccess, setIsSuccess] = useState(null)
  const [errorModal, setErrorModal] = useState("Что-то пошло не так")
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category_id: '',
    image: null,
  })

  const handlePublishPost = async () => {
    if (!formData.image) {
      setIsSuccess('error')
      setErrorModal('Выберите изображение')
      return
    }

    setIsLoading(true)

    try {
      const data = await CreatePostModalApi(
        formData.title,
        formData.description,
        formData.category_id,
        formData.image,
        token
      )
      setIsSuccess("success")
      setIsLoading(false)
      return data
    } catch (e) {
      setIsSuccess("error")
      console.log(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeletePost = async (id) => {
    if (!id) return
    setIsLoading(true)

    try {
      await DeletePostModalApi(token, id)
      setIsSuccess('success')
    } catch (e) {
      setIsSuccess('error')
      console.log(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleModalInfoClick = () => {
    const success = isSuccess === 'success'

    setIsSuccess(null)

    if (success) {
      onCloseModal?.()
    }
  }

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className={classNames(className, 'post-modal')}>
      {isLoading && <Loader />}
      {isSuccess !== null && (
        <ModalInfo
          title={isSuccess === 'success' ? 'Успех' : 'Ошибка'}
          description={
            isSuccess === 'success' ? 'Операция выполнена' : errorModal
          }
          onClick={handleModalInfoClick}
        />
      )}
      {!isNewPostModal && (
        <Button
          onClick={onLeftButtonClick}
          className="post-modal__button post-modal__button--left"
          iconName={ArrowLeft}
          mode="circle"
        />
      )}
      <div className="post-modal__main">
        <div className="post-modal__image-wrapper">
          {!isNewPostModal && (
            <img
              className="post-modal__image"
              src={`${API_URL}${imageSrc}`}
              alt=""
            />
          )}
          {isNewPostModal && (
            <DropImage
              image={formData.image}
              onChange={(file) => updateField('image', file)}
            />
          )}
        </div>
        <div className="post-modal__body">
          {isNewPostModal && (
            <form className="post-modal__info post-modal__info--new-post-modal">
              <div className="post-modal__category">
                <div className="post-modal__category-wrapper">
                  <span className="post-modal__category-text">
                    Публикация работы
                  </span>
                </div>
                <span className="post-modal__category-button-wrapper">
                  <Button
                    className="post-modal__category-button"
                    iconName={Cross}
                    onClick={onClick}
                    mode="transparent"
                  />
                </span>
              </div>
              <SelectDropdown
                className="post-modal__category-select"
                type="radio"
                mode="new-post-modal"
                onChange={(value) => updateField('category_id', value)}
                value={formData.category_id}
                isNewPostModal
                dropDownPosition="right"
                categories={categories}
              />
              <label className="post-modal__label" htmlFor="title-input">
                <input
                  className="post-modal__input new-post-modal-border"
                  id="title-input"
                  name=""
                  placeholder="Заголовок"
                  maxLength={40}
                  onChange={(e) => updateField('title', e.target.value)}
                  value={formData.title}
                />
                <div className="post-modal__input-words-wrapper">
                  <span className="post-modal__input-words">
                    {formData.title.length}
                  </span>
                  /40
                </div>
              </label>
              <label className="post-modal__label" htmlFor="textarea">
                <textarea
                  className="post-modal__textarea new-post-modal-border"
                  id="textarea"
                  name=""
                  placeholder="Описание"
                  maxLength={400}
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                />
                <div className="post-modal__input-words-wrapper">
                  <span className="post-modal__input-words">
                    {formData.description.length}
                  </span>
                  /400
                </div>
              </label>
            </form>
          )}

          {!isNewPostModal && (
            <div className="post-modal__info">
              <div className="post-modal__category">
                <div className="post-modal__category-wrapper">
                  <span className="post-modal__category-text">{category}</span>
                </div>
                <span className="post-modal__category-button-wrapper">
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
          )}

          {isAdmin && (
            <div className="post-modal__controls container">
              <Button
                label={isNewPostModal ? 'Опубликовать' : 'Редактировать'}
                mode="dark"
                onClick={isNewPostModal ? handlePublishPost : undefined}
              />
              <Button
                label={isNewPostModal ? 'Отменить' : 'Удалить'}
                onClick={
                  isNewPostModal ? onCloseModal : () => handleDeletePost(id)
                }
              />
            </div>
          )}
        </div>
      </div>
      {!isNewPostModal && (
        <Button
          onClick={onRightButtonClick}
          className="post-modal__button post-modal__button--right"
          iconName={ArrowRight}
          mode="circle"
        />
      )}
    </div>
  )
}

export default PostModal
