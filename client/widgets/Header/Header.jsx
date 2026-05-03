import Logo from "@/shared/Logo"
import Socials from "@/shared/Socials"
import Navbar from "../Navbar"
import "./Header.scss"
import BurgerButton from '@/shared/BurgerButton'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

const Header = () => {

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
        <Socials className="header__socials" />
      </div>
      <BurgerButton
        onClick={onBurgerButtonClick}
        className={classNames('header__burger-button visible-tablet',{
          ['is-active']: isMenuOpen,
        })}
      />
    </header>
  )
}

export default Header