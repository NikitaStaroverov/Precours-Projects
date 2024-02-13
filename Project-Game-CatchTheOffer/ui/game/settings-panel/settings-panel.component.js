import { SelectPointsToWin } from './settings-boxes/setting-points-to-win.component.js'
import { SelectGridSize } from './settings-boxes/setting-grid-size.component.js'
import { SelectPointsToLose } from './settings-boxes/setting-points-to-lose.component.js'
import { StartButton } from '../buttons/RestartButton.js'
import { STATUSES, data } from '../../../data.js'

export function SettingsPanel() {
	const element = document.createElement('div')
	SelectGridSize(element)
	SelectPointsToWin(element)
	SelectPointsToLose(element)

	if (data.status === STATUSES.SETTINGS) {
		const startButton = StartButton()
		element.append(startButton)
	}

	return element
}
