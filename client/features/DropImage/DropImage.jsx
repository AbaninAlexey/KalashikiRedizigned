import './DropImage.scss'
import classNames from 'classnames'
import { useEffect, useState, useRef } from 'react'
import Button from '@/shared/Button'
import Upload from '/client/assets/icons/upload.svg?react'

const DropImage = ({ image, onChange }) => {
  const [preview, setPreview] = useState(null)

  const handleFile = (file) => {
    if (!file) return

    if (!file.type.startsWith('image/')) {
      alert('Можно загрузить только изображение')
      return
    }

    onChange(file)
  }

  const inputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()

    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  useEffect(() => {
    if (!image) return

    const objectUrl = URL.createObjectURL(image)

    setPreview(objectUrl)

    return () => {
      URL.revokeObjectURL(objectUrl)
    }
  }, [image])

  return (
    <div className="drop-image">
      <label
        className={`drop-image__dropzone`}
        onDragOver={(e) => {
          e.preventDefault()
        }}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          className="dropzone__input"
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files[0])}
        />

        {image ? (
          <img className="drop-image__preview" src={preview} alt={image.name} />
        ) : (
          <div className="drop-image__body">
            <div className="drop-image__body-wrapper">
              <h3>Добавить изображение</h3>
              <p className="hidden-tablet">
                Перетащите сюда файл jpg, png или загрузите его с устройства
              </p>
              <p className="visible-tablet">
                Загрузите с устройства файл jpg, png
              </p>
              <Button
                onClick={() => inputRef.current?.click()}
                className="drop-image__button"
                mode="borderead-transparent"
                iconName={Upload}
                label="Загрузить"
              />
            </div>
          </div>
        )}
      </label>
    </div>
  )
}

export default DropImage
