// data
let playlist = {
	title: 'Hip-Hop Hits',
	coverImageUrl: './playlist1.png',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSeconds: 733,
	},
	tracks: [
		{
			coverImageUrl: 'track1.png',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: 'Eminem_-_Rap_God.mp3',
			isHot: false,
		},
		{
			coverImageUrl: 'track2.png',
			artistName: '50cent',
			title: 'In da Club',
			fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
			isHot: true,
		},
	],
}
let playlist2 = {
	title: 'Hip-Hop Hits',
	coverImageUrl: './playlist1.png',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSeconds: 733,
	},
	tracks: [
		{
			coverImageUrl: 'track1.png',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: 'Eminem_-_Rap_God.mp3',
			isHot: false,
		},
		{
			coverImageUrl: 'track2.png',
			artistName: '50cent',
			title: 'In da Club',
			fileUrl: '50_Cent_-_In_Da_Club_FlexyOkay.com.mp3',
			isHot: true,
		},
	],
}

// render
renderPlaylist(playlist)
renderPlaylist(playlist2)

function renderPlaylist(playlistForRendering) {
	let playlistImageElement = document.createElement('img')
	playlistImageElement.src = playlistForRendering.coverImageUrl
	document.body.append(playlistImageElement)

	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title)
	document.body.append(playlistTitleElement)

	let tracksListElement = document.createElement('ul')

	let track1Element = document.createElement('li')
	track1Element.append(
		playlistForRendering.tracks[0].artistName +
			' - ' +
			playlistForRendering.tracks[0].title
	)

	let track2Element = document.createElement('li')
	track2Element.append(
		playlistForRendering.tracks[1].artistName +
			' - ' +
			playlistForRendering.tracks[1].title
	)

	tracksListElement.append(track1Element)
	tracksListElement.append(track2Element)

	document.body.append(tracksListElement)
}

function renderPlaylistHeader(playlistForRendering) {
	// здесь логика отрисовки шапки "входного" плейлиста
}
function renderTrack(inputTrackForRendering) {
	// здесь логика отрисовки "входного" трека
}
