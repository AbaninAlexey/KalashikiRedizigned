import "./Icon.scss"

const Icon = ({ Component, size = 24, className }) => {
  return <Component width={size} height={size} className={className} />
}

export default Icon