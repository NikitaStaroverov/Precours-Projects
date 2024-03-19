export const settingsData = {
	grid_size: [
		{ h: 3, w: 3 },
		{ h: 4, w: 4 },
		{ h: 5, w: 5 },
		{ h: 6, w: 6 },
		{ h: 7, w: 7 },
		{ h: 8, w: 8 },
	],
	points_to_win: [20, 30, 40, 60, 80, 100],
	points_to_lose: [3, 5, 7, 9, 11, 13],
}

export const STATUSES = {
	IN_PROGRESS: 'in_progress',
	PAUSE: 'pause',
	SETTINGS: 'settings',
	WIN: 'win',
	LOSE: 'lose',
}

export const data = {
	catchPoints: 0, // or score
	missPoints: 0,
	status: STATUSES.SETTINGS,
	x: 0,
	y: 0,
	settings: {
		gridSize: {
			columnsCount: settingsData.grid_size[0].h,
			rowsCount: settingsData.grid_size[0].w,
		},
		winPoints: settingsData.points_to_win[0],
		losePoints: settingsData.points_to_lose[0],
		muteMode: false,
	},
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
		newX = getRandomInt(data.settings.gridSize.columnsCount)
		newY = getRandomInt(data.settings.gridSize.rowsCount)

		newCoordsIsEqualOldCoords = newX === data.x && newY === data.y
	} while (newCoordsIsEqualOldCoords)
	data.x = newX
	data.y = newY
}

function runOfferJumpInterval() {
	clearInterval(offerJumpIntervalId)
	offerJumpIntervalId = setInterval(missOffer, 2000)
}

//ловим оффер
export function catchOffer() {
	data.catchPoints++

	if (data.catchPoints === data.settings.winPoints) {
		data.status = STATUSES.WIN
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
export function start() {
	data.catchPoints = 0
	data.missPoints = 0
	data.status = STATUSES.IN_PROGRESS
	changeOfferCoordinates()
	runOfferJumpInterval()
	listener()
}

export function restart() {
	data.catchPoints = 0
	data.missPoints = 0
	data.status = STATUSES.SETTINGS
	changeOfferCoordinates()
	listener()
}

function missOffer() {
	data.missPoints++

	if (data.missPoints === data.settings.losePoints) {
		data.status = STATUSES.LOSE
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

// настройки игры
export function updateGridSize(newX, newY) {
	data.settings.gridSize.columnsCount = newX
	data.settings.gridSize.rowsCount = newY
	console.log(data.settings.gridSize)
	listener()
}

export function updateLosePoints(newLosePoints) {
	data.settings.losePoints = newLosePoints
	console.log(data.settings.losePoints)
	listener()
}

export function updateWinPoints(newWinPoints) {
	data.settings.winPoints = newWinPoints
	console.log(data.settings.winPoints)
	listener()
}

export function subscribe(observer) {
	listener = observer
}
