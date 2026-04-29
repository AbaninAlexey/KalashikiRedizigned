import './ErrorPage.scss'
import classNames from 'classnames'
import Button from '@/shared/Button'
import { Link } from 'react-router-dom'
import ErrorMessage from '@/shared/ErrorMessage'

const ErrorPage = (props) => {
  const { className } = props

  return (
    <section className={classNames(className, 'error-page container')}>
      <h1 className="visually-hidden">
        Ошибка 404, страница не найдена
      </h1>
      <ErrorMessage
        title="Страница не найдена"
        description="Возможно на сервере произошла ошибка или страница была удалена"
        buttonLabel="Перейти на главную"
        to="/"
      />
    </section>
  )
}

export default ErrorPage
