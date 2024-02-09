// Отрисовка информации плейлиста
export function renderPlaylistHeaderTitle(playlistForRendering, headerElement) {
	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title)
	headerElement.append(playlistTitleElement)
}
