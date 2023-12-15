import { renderCoverImageTrackElement } from './trackImage/renderImageTrack.component.js'
import { renderTrackTitleElement } from './trackTitle/renderTrackTitle.component.js'

// Отрисовка элементов трека
export function renderPlaylistTrack(inputTrackForRendering) {
	let trackElement = document.createElement('div')

	renderTrackTitleElement(inputTrackForRendering, trackElement)

	renderCoverImageTrackElement(inputTrackForRendering, trackElement)

	renderPlayerAudioElement(inputTrackForRendering, trackElement)

	document.body.append(trackElement)
}

// Отрисовка дорожки проигрывателя трека
function renderPlayerAudioElement(inputTrackForRendering, trackElement) {
	let playerAudioElement = document.createElement('audio')
	playerAudioElement.src = inputTrackForRendering.fileUrl
	playerAudioElement.controls = true
	trackElement.append(playerAudioElement)
}
