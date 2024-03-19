import { createElement } from '../../../../ui-kit/helper.js'

export function MuteMode(settingsBar) {
	const divElement = createElement('div', ['div-switcher'], '')
	const inputElement = createElement('input', ['switcher'], '')
	inputElement.type = 'checkbox'

	divElement.append(inputElement)

	settingsBar.append(divElement)
}
