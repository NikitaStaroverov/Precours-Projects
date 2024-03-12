import { subscribe } from './data.js'
import { Game } from './game/game.js'
function renderUI() {
	const appElement = document.getElementById('app')
	appElement.innerHTML = ''

	const gameElement = Game()

	appElement.append(gameElement)
}

renderUI()
subscribe(renderUI)
