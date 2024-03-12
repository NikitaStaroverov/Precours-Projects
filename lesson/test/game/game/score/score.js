import { data } from '../../../data.js'

export function Score() {
	const container = document.createElement('div')

	container.append(
		`Catches:${data.scores.catchesCount} Misses:${data.scores.missesCount}`
	)

	return container
}
