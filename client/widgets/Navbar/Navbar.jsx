import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import classNames from 'classnames'

const Navbar = (props) => {
  const { className, onClick } = props

  const links = [
    { link: '/', label: 'Главная' },
    { link: '/gallery', label: 'Галерея' },
    { link: '/contacts', label: 'Контакты' },
  ]

  return (
    <nav className={classNames(className, 'navbar')}>
      {links.map((link) => (
        <NavLink
          key={link.link}
          className={({ isActive }) =>
            classNames('navbar__link', { active: isActive })
          }
          to={link.link}
          onClick={onClick}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
