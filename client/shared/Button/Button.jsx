import classNames from 'classnames'
import './Button.scss'

const Button = (props) => {
  const {
    className,
    href,
    children,
    type = 'button',
    target,
    label,
    isLabelHidden = false,
    extraAttrs,
    mode
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
      {...extraAttrs}
      aria-label={title}
      title={title}
    >
      {!isLabelHidden && <span className="button__label">{label}</span>}
    </Component>
  )
}

export default Button
