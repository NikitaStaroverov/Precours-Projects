import { subscribe } from './data.js'
import { Game } from './game/game.js'
const appElement = document.getElementById('app')
function renderUI() {
	appElement.innerHTML = ''
	const gameElement = Game()

	appElement.append(gameElement)
}

renderUI()
subscribe(renderUI)
