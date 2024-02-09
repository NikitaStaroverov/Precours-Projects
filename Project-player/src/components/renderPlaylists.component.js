import { renderPlaylist } from './playlist/renderPlaylist.component.js'

// Отрисовка плейлистов
export function renderPlaylists(inputPlaylists) {
	for (let i = 0; i < inputPlaylists.length; i++) {
		const playlist = inputPlaylists[i]
		renderPlaylist(playlist)
	}
}
