import "./Field.scss"

const Field = (props) => {
  const {
    label,
    id,
    className,
    type = "text",
    error
  } = props
  return (
    <div className={`field`}>
      <label
        className="field__label"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`field__input ${error ? "field__is-invalid" : ""}`}
        id={id}
        placeholder=""
        autoComplete="off"
        type={type}
      />
      {error && (
        <span className={"field__error"} title={error}>{error}</span>
      )}
    </div>
  )
}

export default Field