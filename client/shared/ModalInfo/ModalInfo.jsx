import './ModalInfo.scss'
import classNames from 'classnames'
import Button from '@/shared/Button'

const ModalInfo = (props) => {
  const { className, title, description, onClick, onCloseModal } = props

  return (
    <div className={classNames(className, 'modal-info')}>
      <div className="modal-info__wrapper">
        <div className="modal-info__body">
          <h3 className="modal-info__title">{title}</h3>
          <p className="modal-info__description">{description}</p>
        </div>
        <div className="modal-info__controls">
          <Button
            className="modal-info__button"
            mode="dark"
            label="Продолжить"
            onClick={onClick}
            onCloseModal={onCloseModal}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalInfo
