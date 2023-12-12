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
			coverImageUrl: './assets/images/Track1.png',
			artistName: 'Eminem',
			title: 'Rap God',
			fileUrl: './tracks/mp3/Eminem_-_Rap_God.mp3',
			isHot: true,
		},
		{
			coverImageUrl: './assets/images/Track2.png',
			artistName: '50 cent',
			title: 'In da Club',
			fileUrl: './tracks/mp3/50_Cent_-_In_Da_Club.mp3',
			isHot: true,
		},
		{
			coverImageUrl: './assets/images/Track3.png',
			artistName: 'DMX',
			title: "X Gon' Give It To Ya",
			fileUrl: './tracks/mp3/DMX_-_X_Gon_Give_It_to_Ya.mp3',
			isHot: true,
		},
		{
			coverImageUrl: './assets/images/Track4.png',
			artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
			title: "You Don't Know",
			fileUrl:
				'./tracks/mp3/Eminem_50_Cent_Lloyd_Banks_Cahis_-_You_Dont_Know.mp3',
			isHot: false,
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
			coverImageUrl: './assets/images/Track1Playlist2.png',
			artistName: 'Public Enemy',
			title: 'Fight the Power',
			fileUrl: './tracks/mp3/Public_Enemy_-_Fight_the_Power.mp3',
			isHot: true,
		},
		{
			coverImageUrl: './assets/images/Track2Playlist2.png',
			artistName: 'Vanila Ice',
			title: 'Ice Ice Baby',
			fileUrl: './tracks/mp3/Vanilla_Ice_-_Ice_Ice_Baby.mp3',
			isHot: true,
		},
		{
			coverImageUrl: './assets/images/Track3Playlist2.png',
			artistName: 'MC Hammer',
			title: 'You Can’t Touch This',
			fileUrl: './tracks/mp3/MC_Hammer_-_U_Cant_Touch_This.mp3',
			isHot: false,
		},
		{
			coverImageUrl: './assets/images/Track4Playlist2.png',
			artistName: 'Brand Nubian',
			title: 'Brand Nubian',
			fileUrl: './tracks/mp3/Brand_Nubian_-_Brand_Nubian.mp3',
			isHot: false,
		},
	],
}

// render
renderPlaylist(playlist)
renderPlaylist(playlist2)

function renderPlaylist(playlistForRendering) {
	renderPlaylistHeader(playlistForRendering)

	renderTrack(playlistForRendering.tracks[0])
	renderTrack(playlistForRendering.tracks[1])
	renderTrack(playlistForRendering.tracks[2])
	renderTrack(playlistForRendering.tracks[3])
}
// Отрисовка шапки плейлиста
function renderPlaylistHeader(playlistForRendering) {
	let playlistImageElement = document.createElement('img')
	playlistImageElement.src = playlistForRendering.coverImageUrl
	document.body.appendChild(playlistImageElement)

	let playlistTitleElement = document.createElement('h2')
	playlistTitleElement.append(playlistForRendering.title)
	document.body.append(playlistTitleElement)
}

// Отрисовка треков
function renderTrack(inputTrackForRendering) {
	let trackElement = document.createElement('div')
	trackElement.append(
		inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title
	)

	let playerElement = document.createElement('audio')
	playerElement.src = inputTrackForRendering.fileUrl
	playerElement.controls = true
	trackElement.append(playerElement)

	let coverElement = document.createElement('img')
	coverElement.src = inputTrackForRendering.coverImageUrl
	trackElement.append(coverElement)

	document.body.append(trackElement)
}
