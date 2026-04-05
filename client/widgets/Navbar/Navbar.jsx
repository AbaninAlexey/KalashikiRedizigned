import { Link } from 'react-router-dom'
import "./Navbar.scss"
import classNames from 'classnames'

const Navbar = (props) => {
  const {className} = props
  return (
    <nav className={classNames(className, "navbar")}>
      <Link className="navbar__link" to="/">
        Главная
      </Link>
      <Link className="navbar__link" to="/gallery">
        Галлерея
      </Link>
      <Link className="navbar__link" to="/contacts">
        Контакты
      </Link>
    </nav>
  )
}

export default Navbar
