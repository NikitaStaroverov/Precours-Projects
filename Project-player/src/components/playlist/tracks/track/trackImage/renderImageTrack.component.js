// Отрисовка картинки трека
export function renderCoverImageTrackElement(
	inputTrackForRendering,
	trackElement
) {
	let coverImageTrackElement = document.createElement('img')
	coverImageTrackElement.src = inputTrackForRendering.coverImageTrackUrl
	trackElement.append(coverImageTrackElement)
}
