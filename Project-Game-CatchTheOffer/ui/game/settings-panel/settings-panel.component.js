import { SelectPointsToWin } from './settings-boxes/setting-points-to-win.component.js'
import { SelectGridSize } from './settings-boxes/setting-grid-size.component.js'
import { SelectPointsToLose } from './settings-boxes/setting-points-to-lose.component.js'
import { createElement } from '../../../ui-kit/helper.js'
import { MuteMode } from './settings-boxes/mute-mode.component.js'

export function SettingsPanel() {
	const settingsBar = createElement('div', ['settingsBar'], '')
	SelectGridSize(settingsBar)
	SelectPointsToWin(settingsBar)
	SelectPointsToLose(settingsBar)
	MuteMode(settingsBar)

	return settingsBar
}
