import { renderPlaylistHeaderCoverImage } from './headerImage/renderHeaderCoverImage.component.js'
import { renderPlaylistHeaderTitle } from './headerTitle/renderHeaderTitle.component.js'

// Отрисовка шапки плейлиста
export function renderPlaylistHeader(playlistForRendering) {
	const headerElement = document.createElement('div')

	renderPlaylistHeaderTitle(playlistForRendering, headerElement)

	renderPlaylistHeaderCoverImage(playlistForRendering, headerElement)

	document.body.append(headerElement)
}
