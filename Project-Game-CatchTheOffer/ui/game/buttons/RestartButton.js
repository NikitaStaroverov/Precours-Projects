import { restart } from '../../../data.js'

export function RestartButton() {
	const element = document.createElement('button')
	element.innerHTML = 'Restart'
	element.addEventListener('click', () => {
		restart()
	})
	return element
}
export function StartButton() {
	const element = document.createElement('button')
	element.innerHTML = 'Start Game'
	element.addEventListener('click', () => {
		restart()
	})
	return element
}
