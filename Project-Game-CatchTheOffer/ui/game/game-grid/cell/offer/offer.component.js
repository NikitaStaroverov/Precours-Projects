import { catchOffer } from '../../../../../data.js'

export function Offer() {
	const element = document.createElement('img')

	element.src = './assets/images/Default.svg'

	function clickHandler() {
		catchOffer()
	}
	element.addEventListener('click', clickHandler)
	return element
}

export function CaughtOffer() {
	const element = document.createElement('img')

	element.src = './assets/images/Offer_Catch.svg'

	return element
}

export function MissedOffer() {
	const element = document.createElement('img')

	element.src = './assets/images/Offer_miss.svg'

	return element
}
