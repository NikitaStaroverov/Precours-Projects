import { createElement } from './helper.js'

export function Image(tagName, classes = [], id = '', src) {
	const image = createElement(tagName, (classes = []), (id = ''))
	image.src = src
	return image
}
