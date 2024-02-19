import { SelectPointsToWin } from './settings-boxes/setting-points-to-win.component.js'
import { SelectGridSize } from './settings-boxes/setting-grid-size.component.js'
import { SelectPointsToLose } from './settings-boxes/setting-points-to-lose.component.js'
import { StartButton } from '../buttons/RestartButton.js'
import { STATUSES, data } from '../../../data.js'
import { createElement } from '../../../helper.js'

export function SettingsPanel() {
	const settingsBar = createElement('div', ['settingsBar'], '')
	SelectGridSize(settingsBar)
	SelectPointsToWin(settingsBar)
	SelectPointsToLose(settingsBar)

	// if (data.status === STATUSES.SETTINGS) {
	// 	const startButton = StartButton()
	// 	element.append(startButton)
	// }

	return settingsBar
}
