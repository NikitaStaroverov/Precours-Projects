import { settingsData } from '../../../../settings-data.js'

export function SelectPointsToLose(element) {
	const selectElement = document.createElement('select')

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

	element.append(selectElement)
}
