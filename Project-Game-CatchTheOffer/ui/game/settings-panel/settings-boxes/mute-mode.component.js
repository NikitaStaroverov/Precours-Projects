import { createElement } from '../../../../ui-kit/helper.js'

export function MuteMode(settingsBar) {
	const divElement = createElement('div', ['div-switcher'], '')
	const inputElement = createElement('input', ['switcher'], 'on')
	inputElement.type = 'checkbox'
	inputElement.checked = true

	divElement.append(inputElement)

	settingsBar.append(divElement)
}
