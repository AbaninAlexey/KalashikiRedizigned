import './Loader.scss'
import classNames from 'classnames'

const Loader = (props) => {
  const { className } = props

  return <div className={classNames(className, 'loader')}>

  </div>
}

export default Loader
