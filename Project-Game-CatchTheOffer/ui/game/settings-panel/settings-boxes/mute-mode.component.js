import { createElement } from '../../../../ui-kit/helper.js'

export function MuteMode() {
	const conteinerElement = createElement(
		'div',
		['conteiner', 'conteiner-switcher'],
		''
	)
	const titlelElement = createElement('h5', ['nameSetting'], '')
	titlelElement.textContent = 'Mute mode'

	const divElement = createElement('div', ['div-switcher'], '')
	const inputElement = createElement('input', ['switcher'], 'on')
	inputElement.type = 'checkbox'
	inputElement.checked = true

	divElement.append(inputElement)

	conteinerElement.append(titlelElement, divElement)
	return conteinerElement
}
