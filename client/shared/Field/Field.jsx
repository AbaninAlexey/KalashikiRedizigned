import "./Field.scss"

const Field = (props) => {
  const {
    label,
    id,
    className,
    type = "text",
    error,
    onChange,
    value
  } = props
  return (
    <div className={`field`}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={`field__input ${error ? 'field__input-is-invalid' : ''}`}
        id={id}
        placeholder=""
        autoComplete="off"
        type={type}
      />
    </div>
  )
}

export default Field