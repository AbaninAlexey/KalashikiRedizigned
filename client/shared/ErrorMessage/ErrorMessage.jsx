import './ErrorMessage.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '@/shared/Button'

const ErrorMessage = (props) => {
  const { className, title, description, buttonLabel, to} = props

  return (
    <div className="error-message">
      <img
        className="error-message__image"
        src="./client/assets/icons/sad-cat.svg"
        alt="Грустный котик"
        width="98"
        height="105"
        loading="lazy"
      />
      <div className="error-message__wrapper">
        <h2 className="error-message__title">{title}</h2>
        <p className="error-message__description">
          {description}
        </p>
      </div>
      <Button to={to} className="error-message__button button" label={buttonLabel}/>
    </div>
  )
}

export default ErrorMessage
