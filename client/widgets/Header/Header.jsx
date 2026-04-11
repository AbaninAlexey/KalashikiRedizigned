import Logo from "@/shared/Logo"
import Socials from "@/shared/Socials"
import Navbar from "../Navbar"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header container">
      <Logo className = "header__logo"/>
      <Navbar className="header__nav"/>
      <Socials className="header__socials"/>
    </header>
  )
}

export default Header