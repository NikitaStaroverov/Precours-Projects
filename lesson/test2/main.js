function play() {
	let audio = document.createElement('audio')
	audio.src = './Relax.mp3'

	const inputElement = document.getElementById('on')
	inputElement.checked = true

	inputElement.addEventListener('change', function (e) {
		let isChecked = e.target.checked
		if (isChecked) {
			audio.play()
		} else {
			audio.pause()
		}
	})
}

play()
