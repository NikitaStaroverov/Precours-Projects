import { data } from '../../../data.js'

export function Grid() {
	const container = document.createElement('table')

	for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {
		const rowElement = document.createElement('tr')

		for (let x = 0; x < data.settings.gridSize.columnsCount; x++) {
			const cellElement = document.createElement('td')

			cellElement.append('offer')

			rowElement.append(cellElement)
		}
		container.append(rowElement)
	}

	return container
}
