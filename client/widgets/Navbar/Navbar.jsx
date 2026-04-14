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
        Галерея
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames('navbar__link', { active: isActive })
        }
        to="/contacts"
      >
        Контакты
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          classNames('navbar__link', { active: isActive })
        }
        to="/login"
      >
        Логин
      </NavLink>
    </nav>
  )
}

export default Navbar
