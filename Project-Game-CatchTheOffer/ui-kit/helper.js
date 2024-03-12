export function createElement(tagName, classes = [], id = '') {
	const element = document.createElement(tagName)
	element.classList.add(...classes)
	element.id = id
	return element
}
