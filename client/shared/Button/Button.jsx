import classNames from 'classnames'
import './Button.scss'
import Icon from '@/shared/Icon'
import { Link } from 'react-router-dom'

const Button = (props) => {
  const {
    className,
    to,
    children,
    type = 'button',
    target,
    label,
    isLabelHidden = false,
    extraAttrs,
    mode = '',
    iconName,
    // before | after
    iconPosition = 'before',
    onClick,
    onCloseModal
  } = props

  const isLink = to !== undefined
  const Component = isLink ? Link : 'button'
  const linkProps = { to, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" Component={iconName}/>
  )


  return (
    <Component
      onClick={() => {
        onClick?.()
        onCloseModal?.()
      }}
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
      {...extraAttrs}
      aria-label={title}
      title={title}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button
