import { data, settingsData } from '../../../data.js'

export function Settings() {
	const container = document.createElement('div')
	SelectGridSize(container)

	return container
}

export function SelectGridSize(container) {
	const selectElement = document.createElement('select')
	// Получаем массив значений из settingsData.points_to_lose
	const gridSizeValues = settingsData.grid_size
	// Проходимся по каждому значению в массиве
	gridSizeValues.forEach(value => {
		// Создаем новый элемент option
		const option = document.createElement('option')
		// Задаем значение (value) элементу option равным элементу из массива
		option.value = value
		// Задаем текст внутри option равным значению элемента из массива
		option.text = `${value}x${value}`
		// Добавляем option в select
		selectElement.append(option)
	})

	selectElement.addEventListener('change', function () {
		// При изменении значения select, обновляем настройки игры
		data.settings.gridSize.columnsCount = this.value
		data.settings.gridSize.rowsCount = this.value
	})

	container.append(selectElement)
}
