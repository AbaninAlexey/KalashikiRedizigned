import classNames from 'classnames'
import './Logo.scss'
import { Link } from 'react-router-dom'
import logo from "@/assets/icons/logo.svg"


const Logo = (props) => {

  const {className} = props

  return (
    <>
        <Link className={classNames(className, "logo")} to="/">
          <img
            className="logo__image"
            src={logo}
            alt="Логотип Калашникова"
            width="130"
            height="30"
          />
        </Link>
    </>
  )
}

export default Logo
