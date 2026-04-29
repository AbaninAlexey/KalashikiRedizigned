import './SelectDropdown.scss'
import { useEffect, useId, useRef, useState } from 'react'
import classNames from 'classnames'
import Button from '@/shared/Button'
import Category from '/client/assets/icons/category.svg?react'
import ArrowDown from '/client/assets/icons/arrow-down.svg?react'

const SelectDropdown = (props) => {
  const { className, options, value, onChange, type } = props

  const isCheckbox = type === 'checkbox'
  const isRadio = type === 'radio'

  const selected = isRadio
    ? (options.find((option) => option.value === value) ?? options[0])
    : null

  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropdownRef.current) return

      const isClickInside = dropdownRef.current.contains(e.target)

      if (!isClickInside) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const onSelectButtonClick = () => {
    setIsOpen(!isOpen)
  }

  // функция установки значения текущего выбранного элемента
  const onOptionClick = (option) => {
    onChange(option.value)

    if (type === 'radio') {
      setIsOpen(false) // закрываем только radio
    }
  }

  const radioName = useId()

  return (
    <div
      className={classNames('select-dropdown', {
        ['select-dropdown--category']: type === 'checkbox',
      })}
      ref={dropdownRef}
    >
      <Button
        className="select-dropdown__button button"
        type="button"
        onClick={onSelectButtonClick}
        label={isRadio ? selected.label : 'Категории'}
        iconName={isRadio ? ArrowDown : Category}
        iconPosition={isRadio ? 'after' : 'before'}
      />
      {isOpen && (
        <div className="select-dropdown__dropdown">
          {options.map((option, index) => (
            <label key={option.value} className="select-dropdown__label">
              <input
                key={index}
                className={classNames('select-dropdown__input', {
                  [`select-dropdown__input--${type}`]: type,
                })}
                name={radioName}
                type={type === 'checkbox' ? 'checkbox' : 'radio'}
                checked={
                  isCheckbox
                    ? value.includes(option.value)
                    : selected.value === option.value
                }
                onChange={() => onOptionClick(option)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault()
                    onOptionClick(option)
                  }
                }}
              />
              {type === 'radio' && (
                <span className="select-dropdown__custom-radio" />
              )}
              <span className="select-dropdown__text">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
