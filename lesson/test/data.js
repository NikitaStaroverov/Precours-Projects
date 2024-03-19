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

export let data = {
	scores: {
		catchesCount: 0,
		missesCount: 0,
	},
	settings: {
		gridSize: {
			columnsCount: settingsData.grid_size[0].h,
			rowsCount: settingsData.grid_size[0].w,
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

export function updateGridSize(newX, newY) {
	data.settings.gridSize.columnsCount = newX
	data.settings.gridSize.rowsCount = newY
	console.log(data.settings.gridSize)
	subscriber()
}
