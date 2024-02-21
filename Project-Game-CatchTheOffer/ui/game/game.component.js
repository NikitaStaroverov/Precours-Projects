import { SettingsPanel } from './settings-panel/settings-panel.component.js'
import { ScoreBlock } from './score-block/score-block.component.js'
import { GameGrid } from './game-grid/game-grid.component.js'
import { createElement } from '../../helper.js'

export function Game() {
	const element = createElement('div', ['gameBoard'], '')

	const settingsPanel = SettingsPanel()
	const scoreBlock = ScoreBlock()
	const gameGrid = GameGrid()

	element.append(settingsPanel)
	element.append(scoreBlock)
	element.append(gameGrid)

	return element
}
