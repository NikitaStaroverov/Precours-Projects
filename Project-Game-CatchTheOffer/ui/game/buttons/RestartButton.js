import { restart } from '../../../data.js'
import { createElement } from '../../../helper.js'

export function RestartButton() {
	const element = document.createElement('button')
	element.innerHTML = 'Restart'
	element.addEventListener('click', () => {
		restart()
	})
	return element
}
export function StartButton() {
	const element = createElement('button', ['start-button'], 'game-start-button')
	element.innerHTML = 'START GAME'
	element.addEventListener('click', () => {
		restart()
	})
	return element
}
