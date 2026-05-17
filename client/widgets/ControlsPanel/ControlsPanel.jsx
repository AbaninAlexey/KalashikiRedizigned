import './ControlsPanel.scss'
import classNames from 'classnames'
import Trash from '/client/assets/icons/trash.svg?react'
import Cross from '/client/assets/icons/cross.svg?react'

import SelectDropdown from '@/shared/SelectDropdown'
import Button from '@/shared/Button'

const ControlsPanel = (props) => {
  const {
    className,
    sortValue,
    onSortChange,
    selectedCategories,
    onCategoryChange,
    onResetButtonClick,
    onCloseButtonClick,
    categories,
  } = props

  console.log('contr', categories)

  const optionsSort = [
    { value: 'new', label: 'Новые' },
    { value: 'old', label: 'Старые' },
    { value: 'moreViews', label: 'Больше просмотров' },
    { value: 'lessViews', label: 'Меньше просмотров' },
  ]

  return (
    <div className={classNames(className, 'controls-panel')}>
      <SelectDropdown
        type="radio"
        categories={categories}
        value={sortValue}
        onChange={onSortChange}
      />
      <SelectDropdown
        type="checkbox"
        categories={categories}
        value={selectedCategories}
        onChange={onCategoryChange}
      />
      {selectedCategories?.map((category) => (
        <div
          className="controls-panel__button-wrapper button button--borderead-transparent"
          key={category}
        >
          <span className="controls-panel__text">{category}</span>
          <Button
            className="controls-panel__close-button"
            onClick={() => onCloseButtonClick(category)}
            iconName={Cross}
            mode="transparent"
          />
        </div>
      ))}
      <Button
        label="Сбросить фильтры"
        mode="transparent"
        onClick={onResetButtonClick}
        iconName={Trash}
        iconPosition={'before'}
      />
    </div>
  )
}

export default ControlsPanel
