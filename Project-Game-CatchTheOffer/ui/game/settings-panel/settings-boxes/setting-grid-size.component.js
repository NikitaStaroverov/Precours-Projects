import { settingsData, updateGridSize, data } from '../../../../data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectGridSize() {
	const conteinerElement = createElement('div', ['conteiner'], '')
	const titlelElement = createElement('h5', ['nameSetting'], '')
	titlelElement.textContent = 'Grid size'

	const selectElement = createElement(
		'select',
		['select-settings'],
		'grid-size'
	)

	// Получаем массив значений из settingsData.points_to_lose
	const gridSizeValues = settingsData.grid_size
	const selectedGridSizeValues = data.settings.gridSize

	gridSizeValues.forEach((size, index) => {
		const option = createElement('option', ['option-settings'], 'option')

		option.value = index
		option.text = `${size.h}x${size.w}`

		const isOptionSelected =
			selectedGridSizeValues.rowsCount === size.h &&
			selectedGridSizeValues.columnsCount === size.w
		option.selected = isOptionSelected

		selectElement.append(option)
	})

	selectElement.addEventListener('change', function (e) {
		let selectedIndex = e.currentTarget.value
		const size = settingsData.grid_size[selectedIndex]
		updateGridSize(size.h, size.w)
	})

	conteinerElement.append(titlelElement, selectElement)
	return conteinerElement
}
