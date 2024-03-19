import { STATUSES, data, restart, start } from '../../../data.js'
import { createElement } from '../../../ui-kit/helper.js'

export function RestartButton() {
	const element = createElement(
		'button',
		['restart-button'],
		'play-again-button'
	)
	element.innerHTML = 'Play again'
	element.addEventListener('click', () => {
		if (data.status === STATUSES.WIN) {
			restart()
		} else {
			start()
		}
	})
	return element
}
export function StartButton() {
	const element = createElement(
		'button',
		['restart-button', 'start-game'],
		'start-game-button'
	)
	element.innerHTML = 'START GAME'
	element.addEventListener('click', () => {
		start()
	})
	return element
}
