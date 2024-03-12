import { settingsData } from '../../../../settings-data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectPointsToWin(settingsBar) {
	const selectElement = createElement(
		'select',
		['select-settings'],
		'points-to-win'
	)

	// Получаем массив значений из settingsData.points_to_lose
	const pointsToWinValues = settingsData.points_to_win

	// Проходимся по каждому значению в массиве
	pointsToWinValues.forEach(value => {
		// Создаем новый элемент option
		const option = document.createElement('option')
		// Задаем значение (value) элементу option равным элементу из массива
		option.value = value
		// Задаем текст внутри option равным значению элемента из массива
		option.text = `${value} pts`
		// Добавляем option в select
		selectElement.append(option)
	})

	settingsBar.append(selectElement)
}
