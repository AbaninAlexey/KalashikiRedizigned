import './Socials.scss'
import Max from '/client/shared/assets/icons/max.svg?react'
import Mail from '/client/shared/assets/icons/mail.svg?react'
import Pinterest from '/client/shared/assets/icons/pinterest.svg?react'
import Icon from '@/shared/Icon'
import classNames from 'classnames'

const Socials = (props) => {
  const { className } = props

  const socials = [
    { id: 1, Component: Max, url: '/' },
    {
      id: 2,
      Component: Pinterest,
      url: 'https://ru.pinterest.com/kalashikiaa/',
    },
    { id: 3, Component: Mail, url: '/' },
  ]

  return (
    <ul className={classNames(className, 'socials')}>
      {socials.map(({ id, Component, url }) => (
        <li className="socials__item" key={id}>
          <a
            className="socials__icon"
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon Component={Component} size={24} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
