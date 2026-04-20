import classNames from 'classnames'
import './Button.scss'
import Icon from '@/shared/Icon'

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
    mode = "",
    iconName,
    // before | after
    iconPosition = "before",
  } = props

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" Component={iconName}/>
  )


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
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
