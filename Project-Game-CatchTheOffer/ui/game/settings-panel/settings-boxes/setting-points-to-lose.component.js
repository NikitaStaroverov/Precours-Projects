import { settingsData, updateLosePoints, data } from '../../../../data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectPointsToLose() {
	const conteinerElement = createElement('div', ['conteiner'], '')
	const titlelElement = createElement('h5', ['nameSetting'], '')
	titlelElement.textContent = 'Maximum misses'

	const selectElement = createElement(
		'select',
		['select-settings'],
		'points-to-lose'
	)

	// Получаем массив значений из settingsData.points_to_lose
	const pointsToLoseValues = settingsData.points_to_lose
	const selectedLosePointsValues = data.settings

	pointsToLoseValues.forEach((points, index) => {
		const option = createElement('option', ['option-settings'], 'option')

		option.value = index
		option.text = `${points} pts`

		const isOptionSelected = selectedLosePointsValues.losePoints === points
		option.selected = isOptionSelected

		selectElement.append(option)
	})

	selectElement.addEventListener('change', function (e) {
		let selectedIndex = e.currentTarget.value
		const points = settingsData.points_to_lose[selectedIndex]
		updateLosePoints(points)
	})

	conteinerElement.append(titlelElement, selectElement)
	return conteinerElement
}
