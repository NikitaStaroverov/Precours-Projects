export const settingsData = {
	grid_size: [3, 4, 5, 6, 7, 8],
	points_to_win: [20, 30, 40, 60, 80, 100],
	points_to_lose: [3, 5, 7, 9, 11, 13],
}

export const data = {
	scores: {
		catchesCount: 0,
		missesCount: 0,
	},
	settings: {
		gridSize: {
			columnsCount: settingsData.grid_size[0],
			rowsCount: settingsData.grid_size[0],
		},
	},
	coords: {
		x: 0,
		y: 0,
	},
}

let subscriber = () => {}

export function subscribe(observer) {
	subscriber = observer
}

function getRandomInt(N) {
	return Math.floor(Math.random() * N)
}

function jumpOfferToRandomPosition() {
	let newX, newY
	do {
		newX = getRandomInt(data.settings.gridSize.columnsCount)
		newY = getRandomInt(data.settings.gridSize.rowsCount)
	} while (data.coords.x === newX && data.coords.y === newY)

	data.coords.x = newX
	data.coords.y = newY

	subscriber()
}

// export function updateGridSize(value) {
// 	data.settings.gridSize.columnsCount = value
// 	data.settings.gridSize.rowsCount = value
// 	subscriber()
// }

// element.addEventListener('click', ()=>{
//   catchOffer()
// })
function missOffer() {
	jumpOfferToRandomPosition()

	subscriber()
}

let jumpIntervalId

// function runJumpINterval() {
// 	jumpIntervalId = setInterval(() => {
// 		missOffer()
// 	}, 2000)
// }
// runJumpINterval()
