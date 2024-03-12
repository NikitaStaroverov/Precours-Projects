import { settingsData } from '../../../../settings-data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectPointsToLose(settingsBar) {
	const selectElement = createElement(
		'select',
		['select-settings'],
		'points-to-lose'
	)

	// Получаем массив значений из settingsData.points_to_lose
	const pointsToLoseValues = settingsData.points_to_lose

	// Проходимся по каждому значению в массиве
	pointsToLoseValues.forEach(value => {
		// Создаем новый элемент option
		const option = document.createElement('option')
		// Задаем значение (value) элементу option равным элементу из массива
		option.value = value
		// Задаем текст внутри option равным значению элемента из массива
		option.text = value
		// Добавляем option в select
		selectElement.append(option)
	})

	settingsBar.append(selectElement)
}
