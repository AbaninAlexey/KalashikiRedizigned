import Logo from "@/shared/Logo"
import Socials from "@/shared/Socials"
import Navbar from "../Navbar"
import "./Header.scss"
import BurgerButton from '@/shared/BurgerButton'
import { useContext, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { AuthContext } from '@/app/providers/AuthProvider/AuthContext'
import Button from '@/shared/Button'
import Plus from '/client/assets/icons/plus.svg?react'
import Exit from '/client/assets/icons/exit.svg?react'

const Header = () => {
  const {isAdmin, logout} = useContext(AuthContext)

  const [isMenuOpen, setIsMenuOpen] = useState(null)

  const onBurgerButtonClick = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const onLinkButtonClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header container">
      <Logo className="header__logo" />
      <div
        className={classNames('header__dialog', {
          'is-active': isMenuOpen,
        })}
      >
        <Navbar onClick={onLinkButtonClick} className="header__nav" />
        <Socials
          className={classNames('header__socials', {
            'header__socials--admin': isAdmin,
          })}
        />
        {isAdmin && (
          <div className="header__control-buttons">
            <Button
              className="header__control-button"
              type="button"
              label="Новая работа"
              mode="dark"
              iconName={Plus}
            />
            <Button
              className="header__control-button"
              type="button"
              label="Выйти"
              iconName={Exit}
              onClick={() => logout()}
            />
          </div>
        )}
      </div>
      <BurgerButton
        onClick={onBurgerButtonClick}
        className={classNames('header__burger-button visible-tablet', {
          ['is-active']: isMenuOpen,
        })}
      />
    </header>
  )
}

export default Header