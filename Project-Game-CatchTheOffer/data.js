export const data = {
	catchPoints: 0, // or score
	missPoints: 0,
	winPoints: 5,
	win: false,
	losePoints: 3,
	lose: false,
	//status:,
	x: 0,
	y: 0,
	rowsCount: 3,
	columnsCount: 3,
	missedOffer: null,
	catchOffer: null,
}

let listener = null
let offerJumpIntervalId = null

function getRandomInt(N) {
	return Math.floor(Math.random() * N)
}

function changeOfferCoordinates() {
	let newX = 0
	let newY = 0
	let newCoordsIsEqualOldCoords
	do {
		newX = getRandomInt(data.columnsCount)
		newY = getRandomInt(data.rowsCount)

		newCoordsIsEqualOldCoords = newX === data.x && newY === data.y
	} while (newCoordsIsEqualOldCoords)
	data.x = newX
	data.y = newY
}

function runOfferJumpInterval() {
	clearInterval(offerJumpIntervalId)
	offerJumpIntervalId = setInterval(missOffer, 2000)
}
runOfferJumpInterval()

//ловим оффер
export function catchOffer() {
	data.catchPoints++

	if (data.catchPoints === data.winPoints) {
		data.win = true
		clearInterval(offerJumpIntervalId)
	} else {
		setCaughtOffer(data.x, data.y)
		setTimeout(() => {
			clearCaughtOffer()
			listener()
		}, 300)
		changeOfferCoordinates()
		runOfferJumpInterval()
	}
	listener()
}

//начать новую игру если выйграл
export function restart() {
	data.catchPoints = 0
	data.missPoints = 0
	data.win = false
	data.lose = false
	changeOfferCoordinates()
	// data.x = 0
	// data.y = 0
	runOfferJumpInterval()
	listener()
}

function missOffer() {
	data.missPoints++

	if (data.missPoints === data.losePoints) {
		data.lose = true
		clearInterval(offerJumpIntervalId)
	} else {
		setMissedOffer(data.x, data.y)
		setTimeout(() => {
			clearMissedOffer()
			listener()
		}, 300)
		changeOfferCoordinates()
	}
	listener()
}

function setMissedOffer(x, y) {
	data.missedOffer = { x, y }
}
function clearMissedOffer() {
	data.missedOffer = null
}
function setCaughtOffer(x, y) {
	data.catchOffer = { x, y }
}
function clearCaughtOffer() {
	data.catchOffer = null
}

export function subscribe(observer) {
	listener = observer
}
