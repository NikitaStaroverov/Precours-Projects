import { data } from '../../../../data.js'
import { Offer, CaughtOffer, MissedOffer } from './offer/offer.component.js'

export function Cell(x, y) {
	const cellElement = document.createElement('td')

	if (x === data.x && y === data.y) {
		cellElement.append(Offer())
	}

	if (x === data.missedOffer?.x && y === data.missedOffer?.y) {
		cellElement.append(MissedOffer())
	}

	if (x === data.catchOffer?.x && y === data.catchOffer?.y) {
		cellElement.append(CaughtOffer())
	}

	return cellElement
}
