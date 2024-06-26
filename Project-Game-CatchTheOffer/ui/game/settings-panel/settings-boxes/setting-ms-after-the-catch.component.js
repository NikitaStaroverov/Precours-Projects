import { settingsData, data } from '../../../../data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectMsAfterTheCatch() {
	const conteinerElement = createElement('div', ['conteiner'], '')
	const titlelElement = createElement('h5', ['nameSetting'], '')
	titlelElement.textContent = 'ms after the catch'

	const selectElement = createElement('select', ['select-settings'], '')

	const msAfterTheCatchValues = settingsData.ms_after_the_catch
	// const selectedGridSizeValues = data.settings.gridSize

	msAfterTheCatchValues.forEach((value, index) => {
		const option = createElement('option', ['option-settings'], 'option')

		option.value = index
		option.text = `${value.max}-${value.min} ms`

		// const isOptionSelected =
		// 	selectedGridSizeValues.rowsCount === size.h &&
		// 	selectedGridSizeValues.columnsCount === size.w
		// option.selected = isOptionSelected

		selectElement.append(option)
	})

	selectElement.addEventListener('change', function (e) {
		let selectedIndex = e.currentTarget.value
		const size = settingsData.grid_size[selectedIndex]
	})

	conteinerElement.append(titlelElement, selectElement)
	return conteinerElement
}
