// Отрисовка исполнителя трека и название трека
export function renderTrackTitleElement(inputTrackForRendering, trackElement) {
	let trackTitleElement = document.createElement('h4')

	if (inputTrackForRendering.inTrand) {
		trackTitleElement.append('🔥')
	}

	trackTitleElement.append(
		inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title
	)
	trackElement.append(trackTitleElement)
}
