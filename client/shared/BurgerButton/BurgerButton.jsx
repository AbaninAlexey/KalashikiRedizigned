import './BurgerButton.scss'
import classNames from 'classnames'

const BurgerButton = (props) => {
  const { className, onClick } = props

  return (
    <button
      onClick={onClick}
      className={classNames(className, 'burger-button')}
      type="button"
      aria-label="Кнопка меню"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          className="burger-button__line--1"
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          className="burger-button__line--2"
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          className="burger-button__line--3"
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}

export default BurgerButton
