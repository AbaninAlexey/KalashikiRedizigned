import './Modal.scss'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const Modal = (props) => {
  const { className, children, isOpen, onClose } = props

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
