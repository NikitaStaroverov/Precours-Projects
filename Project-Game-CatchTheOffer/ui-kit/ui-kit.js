export function Image(tagName, classes = [], id = '', src) {
	const image = document.createElement(tagName)
	image.classList.add(...classes)
	image.id = id
	image.src = src
	return image
}
