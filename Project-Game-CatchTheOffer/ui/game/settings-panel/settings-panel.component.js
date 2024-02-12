import { SelectPointsToWin } from './select/select-points-to-win.component.js'
import { SelectGridSize } from './select/select-grid-size.component.js'
import { SelectPointsToLose } from './select/select-points-to-lose.component.js'

export function SettingsPanel() {
	const element = document.createElement('div')
	SelectGridSize(element)
	SelectPointsToWin(element)
	SelectPointsToLose(element)

	return element
}
