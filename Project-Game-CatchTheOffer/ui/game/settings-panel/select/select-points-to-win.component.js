import { settingsData } from '../settings-data.js'

export function SelectPointsToWin(element) {
	const selectElement = document.createElement('select')

	// Проходимся по ключам объекта
	Object.keys(settingsData.points_to_win).forEach(key => {
		// Создаем новый элемент option
		const option = document.createElement('option')
		option.text = key
		option.value = settingsData.points_to_win[key]
		// Добавляем option в select
		selectElement.appendChild(option)
	})

	element.append(selectElement)
}
