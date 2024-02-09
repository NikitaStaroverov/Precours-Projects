import { data } from '../../../data.js'
import { RestartButton } from '../buttons/RestartButton.js'

export function Lose() {
	const element = document.createElement('div')

	element.append(
		`You LOSE, points: ${data.catchPoints}; miss: ${data.missPoints}`
	)

	const restartButton = RestartButton()
	element.append(restartButton)

	return element
}
