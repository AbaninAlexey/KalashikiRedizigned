import './Button.scss'
import classNames from 'classnames'

const Button = (props) => {
  const {
    className,
    type,
    children,
    dark
  } = props

  return (
    <button
      className={classNames(className, 'button', {
        "button--dark": dark
      })}
      type={type ?? "button"}
    >
      {children}
    </button>
  )
}

export default Button