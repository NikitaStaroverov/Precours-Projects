// data
let playlist = {
	title: 'Hip-Hop Hits',
	coverImageUrl: './assets/images/Playlist1.png',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSeconds: 733,
	},
	tracks: [
		{
			coverImageTrackUrl: './assets/images/Track1.png',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: './tracks/mp3/Eminem_-_Rap_God.mp3',
			inTrand: true,
		},
		{
			coverImageTrackUrl: './assets/images/Track2.png',
			artistName: '50 cent',
			title: 'In da Club',
			fileUrl: './tracks/mp3/50_Cent_-_In_Da_Club.mp3',
			inTrand: false,
		},
		{
			coverImageTrackUrl: './assets/images/Track3.png',
			artistName: 'DMX',
			title: "X Gon' Give It To Ya",
			fileUrl: './tracks/mp3/DMX_-_X_Gon_Give_It_to_Ya.mp3',
			inTrand: true,
		},
		{
			coverImageTrackUrl: './assets/images/Track4.png',
			artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
			title: "You Don't Know",
			fileUrl:
				'./tracks/mp3/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know.mp3',
			inTrand: false,
		},
	],
}
let playlist2 = {
	title: 'Rap Hits 1990s',
	coverImageUrl: './assets/images/Playlist2.png',
	info: {
		totalTracksCount: 4,
		totalTracksDurationInSeconds: 733,
	},
	tracks: [
		{
			coverImageTrackUrl: './assets/images/Track1Playlist2.png',
			artistName: 'Public Enemy',
			title: 'Fight the Power',
			fileUrl: './tracks/mp3/Public_Enemy_-_Fight_the_Power.mp3',
			inTrand: true,
		},
		{
			coverImageTrackUrl: './assets/images/Track2Playlist2.png',
			artistName: 'Vanila Ice',
			title: 'Ice Ice Baby',
			fileUrl: './tracks/mp3/Vanilla_Ice_-_Ice_Ice_Baby.mp3',
			inTrand: true,
		},
		{
			coverImageTrackUrl: './assets/images/Track3Playlist2.png',
			artistName: 'MC Hammer',
			title: 'You Can’t Touch This',
			fileUrl: './tracks/mp3/MC_Hammer_-_U_Cant_Touch_This.mp3',
			inTrand: false,
		},
		{
			coverImageTrackUrl: './assets/images/Track4Playlist2.png',
			artistName: 'Brand Nubian',
			title: 'Brand Nubian',
			fileUrl: './tracks/mp3/Brand_Nubian_-_Brand_Nubian.mp3',
			inTrand: false,
		},
	],
}

// render
renderPlaylist(playlist)
renderPlaylist(playlist2)

// Отрисовка плейлиста
function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering)
	renderPlaylistTracks(playlistForRendering)
}

// Отрисовка шапки плейлиста
function renderPlaylistHeader(playlistForRendering) {
	const headerElement = document.createElement('div')

	renderPlaylistHederTitle(playlistForRendering, headerElement)

	renderPlaylistHederCoverImage(playlistForRendering, headerElement)

	document.body.append(headerElement)
}

// Отрисовка картинки плейлиста
function renderPlaylistHederCoverImage(playlistForRendering, headerElement) {
	let coverImageElement = document.createElement('img')
	coverImageElement.src = playlistForRendering.coverImageUrl
	headerElement.append(coverImageElement)
}

// Отрисовка заголовка плейлиста
function renderPlaylistHederTitle(playlistForRendering, headerElement) {
	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title)
	headerElement.append(playlistTitleElement)
}

// Отрисовка треков плейлиста
function renderPlaylistTracks(playlistForRendering) {
	renderPlaylistTrack(playlistForRendering.tracks[0])
	renderPlaylistTrack(playlistForRendering.tracks[1])
	renderPlaylistTrack(playlistForRendering.tracks[2])
	renderPlaylistTrack(playlistForRendering.tracks[3])
}

// Отрисовка элементов трека
function renderPlaylistTrack(inputTrackForRendering) {
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

// Отрисовка картинки трека
function renderCoverImageTrackElement(inputTrackForRendering, trackElement) {
	let coverImageTrackElement = document.createElement('img')
	coverImageTrackElement.src = inputTrackForRendering.coverImageTrackUrl
	trackElement.append(coverImageTrackElement)
}

// Отрисовка исполнителя трека и название трека
function renderTrackTitleElement(inputTrackForRendering, trackElement) {
	let trackTitleElement = document.createElement('h4')

	if (inputTrackForRendering.inTrand) {
		trackTitleElement.append('🔥')
	}

	trackTitleElement.append(
		inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title
	)
	trackElement.append(trackTitleElement)
}
