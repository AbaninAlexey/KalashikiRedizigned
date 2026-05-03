import './Footer.scss'
import Logo from '@/shared/Logo'
import Socials from '@/shared/Socials'

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__wrapper">
        <Logo className="footer__logo"/>
        <p className="footer__copy">
          © Kalashiki 2026. Все права защищены.
        </p>
      </div>
      <Socials className="footer__socials" />
    </footer>
  )
}

export default Footer
