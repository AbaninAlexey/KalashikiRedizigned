import './Auth.scss'
import classNames from 'classnames'
import Field from '@/shared/Field'
import Button from '@/shared/Button'

const Auth = (props) => {
  const { className } = props

  return (
    <form action="" className="auth">
      <h2 className="auth__title">Авторизация</h2>
      <div className="auth__wrapper">
        <Field label="Логин" type="email" id="login-feild" />
        <Field label="Пароль" type="password" id="password-feild" />
      </div>
      <Button className="auth__button" type="submit" dark>
        Войти
      </Button>
    </form>
  )
}

export default Auth
