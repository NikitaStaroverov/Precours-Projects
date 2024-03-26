import { settingsData, updateWinPoints, data } from '../../../../data.js'
import { createElement } from '../../../../ui-kit/helper.js'

export function SelectPointsToWin() {
	const conteinerElement = createElement('div', ['conteiner'], '')
	const titlelElement = createElement('h5', ['nameSetting'], '')
	titlelElement.textContent = 'Points to win'

	const selectElement = createElement(
		'select',
		['select-settings'],
		'points-to-win'
	)

	// Получаем массив значений из settingsData.points_to_lose
	const pointsToLoseValues = settingsData.points_to_win
	const selectedWinPointsValues = data.settings

	pointsToLoseValues.forEach((points, index) => {
		const option = createElement('option', ['option-settings'], 'option')

		option.value = index
		option.text = `${points} pts`

		const isOptionSelected = selectedWinPointsValues.winPoints === points
		option.selected = isOptionSelected

		selectElement.append(option)
	})

	selectElement.addEventListener('change', function (e) {
		let selectedIndex = e.currentTarget.value
		const points = settingsData.points_to_win[selectedIndex]
		updateWinPoints(points)
	})

	conteinerElement.append(titlelElement, selectElement)
	return conteinerElement
}
