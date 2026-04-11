import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import classNames from 'classnames'

const Navbar = (props) => {
  const { className } = props
  return (
    <nav className={classNames(className, 'navbar')}>
      <NavLink
        className={({ isActive }) =>
          classNames('navbar__link', { active: isActive })
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames('navbar__link', { active: isActive })
        }
        to="/gallery"
      >
        Галлерея
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames('navbar__link', { active: isActive })
        }
        to="/contacts"
      >
        Контакты
      </NavLink>
    </nav>
  )
}

export default Navbar
