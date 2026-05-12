import './Auth.scss'
import classNames from 'classnames'
import Field from '@/shared/Field'
import Button from '@/shared/Button'
import useAuth from '@/features/auth/hooks/useAuth'

const Auth = (props) => {
  const { className } = props

  const {
    loginValue,
    password,
    error,
    onSubmitButtonClick,
    setLoginValue,
    setPassword,
    setError,
  } = useAuth()

  console.log("логин",loginValue, 'пароль', password)

  return (
    <form
      action=""
      className="auth"
      onSubmit={onSubmitButtonClick}
      autoComplete="off"
    >
      <h2 className="auth__title">Авторизация</h2>
      <div className="auth__wrapper">
        <Field
          value={loginValue ?? ''}
          onChange={(e) => {
            setLoginValue(e.target.value)

            if (error) {
              setError('')
            }
          }}
          error={error}
          label="Логин"
          type="email"
          id="login-feild"
        />
        <Field
          value={password ?? ''}
          onChange={(e) => {
            setPassword(e.target.value)

            if (error) {
              setError('')
            }
          }}
          error={error}
          label="Пароль"
          type="password"
          id="password-feild"
        />
      </div>
      <Button className="auth__button" type="submit" mode="dark" label="Войти">
        Войти
      </Button>
      {error && <span className="auth__error">{error}</span>}
    </form>
  )
}

export default Auth
