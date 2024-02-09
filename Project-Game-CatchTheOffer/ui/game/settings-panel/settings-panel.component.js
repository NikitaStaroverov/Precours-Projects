export function SettingsPanel() {
	const element = document.createElement('div')

	const selectElement = document.createElement('select')
	const option1 = document.createElement('option')
	option1.text = 'Option 1'
	selectElement.append(option1)

	const option2 = document.createElement('option')
	option2.text = 'Option 2'
	selectElement.append(option2)

	element.append(selectElement)

	return element
}
