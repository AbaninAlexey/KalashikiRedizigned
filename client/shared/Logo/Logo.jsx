import classNames from 'classnames'
import './Logo.scss'

const Logo = (props) => {

  const {className} = props
   
  return (
    <>
      <a className={classNames(className, "logo h3")}>
        Kalashiki
      </a>
    </>
  )
}

export default Logo
