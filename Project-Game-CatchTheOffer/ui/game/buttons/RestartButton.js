import { restart } from '../../../data.js'
import { createElement } from '../../../helper.js'

export function RestartButton() {
	const element = createElement(
		'button',
		['restart-button'],
		'play-again-button'
	)
	element.innerHTML = 'Play again'
	element.addEventListener('click', () => {
		restart()
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
		restart()
	})
	return element
}
