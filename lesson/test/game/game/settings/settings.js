import { settingsData, updateGridSize, data } from '../../../data.js'

export function Settings() {
	const container = document.createElement('div')

	const selectElement = document.createElement('select')

	const gridSizeValues = settingsData.grid_size
	const selectedGridSizeValues = data.settings.gridSize

	gridSizeValues.forEach((size, index) => {
		const option = document.createElement('option')
		option.value = index
		option.text = `${size.h}x${size.w}`

		// const isOptionSelected =
		// 	selectedGridSizeValues.rowsCount === size.h &&
		// 	selectedGridSizeValues.columnsCount === size.w
		// option.selected = isOptionSelected

		selectElement.append(option)
	})

	selectElement.addEventListener('change', function (e) {
		let selectedIndex = e.currentTarget.value
		const size = settingsData.grid_size[selectedIndex]
		updateGridSize(size.h, size.w)
	})

	container.append(selectElement)

	return container
}
