import "./Section.scss"

const Section = (props) => {
  const {children} = props

  return (
    <section className="section">
      {children}
    </section>
  )
}

export default Section