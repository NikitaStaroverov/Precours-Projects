import { Grid } from './game/grid/grid.js'
import { Score } from './game/score/score.js'
import { Settings } from './game/settings/settings.js'

export function Game() {
	const container = document.createElement('div')

	const settingsElement = Settings()
	const scoreElement = Score()
	const gridElement = Grid()

	container.append(settingsElement, scoreElement, gridElement)

	return container
}
