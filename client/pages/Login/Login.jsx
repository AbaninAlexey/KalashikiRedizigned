import './Login.scss'
import Logo from '@/shared/Logo'
import Socials from '@/shared/Socials'
import Field from '@/shared/Field'
import Auth from '@/features/auth'

const Login = () => {

  return (
    <section className="login">
      <Logo className={"login__logo"}/>
      <h1 className="visually-hidden">Страница авторизации</h1>
      <Auth/>
      <Socials className="login__socials"/>
    </section>
  )
}

export default Login