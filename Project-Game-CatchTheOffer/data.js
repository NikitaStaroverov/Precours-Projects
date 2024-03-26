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
	ms_after_the_catch: [
		{ max: 200, min: 100 },
		{ max: 180, min: 80 },
		{ max: 150, min: 70 },
		{ max: 130, min: 50 },
		{ max: 110, min: 30 },
		{ max: 100, min: 10 },
	],
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
	time: {
		minutes: null,
		seconds: null,
	},
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

//начать новую игру если выйграл
export function start() {
	data.catchPoints = 0
	data.missPoints = 0
	data.status = STATUSES.IN_PROGRESS
	startTime()
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

//ловим оффер и не ловим оффер
export function catchOffer() {
	data.catchPoints++

	if (data.catchPoints === data.settings.winPoints) {
		data.status = STATUSES.WIN
		stopTime()
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

function missOffer() {
	data.missPoints++

	if (data.missPoints === data.settings.losePoints) {
		data.status = STATUSES.LOSE
		stopTime()
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

// Время
let gameStartTime
function startTime() {
	gameStartTime = Date.now()
	console.log(gameStartTime)
	return gameStartTime
}

function stopTime() {
	if (data.status === STATUSES.LOSE || data.status === STATUSES.WIN) {
		const gameStopTime = Date.now() - gameStartTime
		data.time.minutes = Math.floor(gameStopTime / 60000) // Преобразуем миллисекунды в минуты
		data.time.seconds = Math.floor((gameStopTime % 60000) / 1000) // Преобразуем остаток в секунды
		console.log(gameStartTime)
		console.log(`${data.time.minutes} ${data.time.seconds}`)
	}
}

export function subscribe(observer) {
	listener = observer
}
