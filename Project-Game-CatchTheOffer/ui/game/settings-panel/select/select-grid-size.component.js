import { settingsData } from '../settings-data.js'

export function SelectGridSize(element) {
	const selectElement = document.createElement('select')

	// Проходимся по ключам объекта
	Object.keys(settingsData.grid_size).forEach(key => {
		// Создаем новый элемент option
		const option = document.createElement('option')
		option.text = key
		option.value = settingsData.grid_size[key]
		// Добавляем option в select
		selectElement.appendChild(option)
	})

	element.append(selectElement)
}
