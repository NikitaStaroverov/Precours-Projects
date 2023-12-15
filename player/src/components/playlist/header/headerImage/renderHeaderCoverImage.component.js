// Отрисовка картинки плейлиста
export function renderPlaylistHeaderCoverImage(
	playlistForRendering,
	headerElement
) {
	let coverImageElement = document.createElement('img')
	coverImageElement.src = playlistForRendering.coverImageUrl
	headerElement.append(coverImageElement)
}
