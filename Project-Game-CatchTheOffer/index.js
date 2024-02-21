import { STATUSES, data, subscribe } from './data.js'
import { StartButton } from './ui/game/buttons/RestartButton.js'
import { Game } from './ui/game/game.component.js'
import { ScoreBlock } from './ui/game/score-block/score-block.component.js'
import { SettingsPanel } from './ui/game/settings-panel/settings-panel.component.js'
import { Lose } from './ui/game/win and lose/lose.component.js'
import { Win } from './ui/game/win and lose/win.component.js'

const appElement = document.querySelector('#app')

function renderApp() {
	appElement.innerHTML = ''

	switch (data.status) {
		case 'win':
			const win = Win()
			appElement.append(win)
			break
		case 'lose':
			const lose = Lose()
			appElement.append(lose)
			break
		case 'in_progress':
			const game = Game()
			appElement.append(game)
			break
		case 'settings':
			const settings = SettingsPanel()
			appElement.append(settings)
			break
	}

	if (data.status === STATUSES.SETTINGS) {
		const startButton = StartButton()
		appElement.append(startButton)
	}
}
renderApp()

subscribe(renderApp)
