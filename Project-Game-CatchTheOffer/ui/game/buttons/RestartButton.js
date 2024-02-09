import { restart } from '../../../data.js'

export function RestartButton() {
	const element = document.createElement('button')
	element.innerHTML = 'Restart'
	element.addEventListener('click', () => {
		restart()
	})
	return element
}
