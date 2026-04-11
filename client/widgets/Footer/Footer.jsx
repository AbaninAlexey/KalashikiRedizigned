import './Footer.scss'
import Logo from '@/shared/Logo'
import Socials from '@/shared/Socials'

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <Logo />
        <p className="footer__copy">
          © Kalashiki 2026. Все права защищены.
        </p>
      </div>
      <Socials />
    </footer>
  )
}

export default Footer
