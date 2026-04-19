import classNames from 'classnames'
import './Logo.scss'
import { Link } from 'react-router-dom'

const Logo = (props) => {

  const {className} = props
   
  return (
    <>
      <Link className={classNames(className, "logo h3")} to="/">
        Kalashiki
      </Link>
    </>
  )
}

export default Logo
