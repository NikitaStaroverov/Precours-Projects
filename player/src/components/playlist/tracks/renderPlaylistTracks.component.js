import { renderPlaylistTrack } from './track/renderTrack.component.js'

// Отрисовка треков плейлиста
export function renderPlaylistTracks(tracks) {
	for (let j = 0; j < tracks.length; j++) {
		const track = tracks[j]
		renderPlaylistTrack(track)
	}
}
