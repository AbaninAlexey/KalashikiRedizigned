import './ErrorPage.scss'
import classNames from 'classnames'
import Button from '@/shared/Button'
import { Link } from 'react-router-dom'

const ErrorPage = (props) => {
  const { className } = props

  return (
    <section className={classNames(className, 'error-page container')}>
        <div className="error-page__body">
          <img
            className="error-page__image"
            src="./client/assets/icons/sad-cat.svg"
            alt="Грустный котик"
            width="98"
            height="105"
            loading="lazy"
          />
          <div className="error-page__wrapper">
            <h1 className="error-page__title h2">Страница не найдена</h1>
            <p className="error-page__description">
              Возможно на сервере произошла ошибка или страница была удалена
            </p>
          </div>
          <Link to="/" className="error-page__button button">
            Перейти на главную
          </Link>
        </div>
    </section>
  )
}

export default ErrorPage
