import { renderPlaylistHeader } from './header/renderPlaylistHeader.component.js'
import { renderPlaylistTracks } from './tracks/renderPlaylistTracks.component.js'

// Отрисовка плейлиста
export function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering)
	renderPlaylistTracks(playlistForRendering.tracks)
}
