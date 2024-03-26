import { SelectPointsToWin } from './settings-boxes/setting-points-to-win.component.js'
import { SelectGridSize } from './settings-boxes/setting-grid-size.component.js'
import { SelectPointsToLose } from './settings-boxes/setting-points-to-lose.component.js'
import { SelectMsAfterTheCatch } from './settings-boxes/setting-ms-after-the-catch.component.js'
import { createElement } from '../../../ui-kit/helper.js'
import { MuteMode } from './settings-boxes/mute-mode.component.js'

export function SettingsPanel() {
	const settingsBar = createElement('div', ['settingsBar'], '')

	settingsBar.append(SelectGridSize())
	settingsBar.append(SelectPointsToWin())
	settingsBar.append(SelectMsAfterTheCatch())
	settingsBar.append(SelectPointsToLose())
	settingsBar.append(MuteMode())

	return settingsBar
}
