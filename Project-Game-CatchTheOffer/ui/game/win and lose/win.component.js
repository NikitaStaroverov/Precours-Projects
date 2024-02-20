import { data } from '../../../data.js'
import { createElement } from '../../../helper.js'
import { RestartButton } from '../buttons/RestartButton.js'

export function Win() {
	const mainWrapper = createElement('div', ['mainWrapper'], '')
	const firstContainer = createElement('div', ['firstContainer'], '')

	const secondContainer = createElement('div', ['secondContainer'], '')
	const ellipseImg = createElement('img', ['ellipse'], 'img1')
	ellipseImg.src = './assets/images/win_and_lose_img/ellipse.svg'

	const secondOverlay = createElement('div', ['secondOverlay'], '')
	const groupImg = createElement('img', ['group'], 'img2')
	groupImg.src = './assets/images/win_and_lose_img/group.svg'
	secondOverlay.append(groupImg)
	secondContainer.append(ellipseImg, secondOverlay)

	const firstOverlay = createElement('div', ['firstOverlay'], '')
	const thirdContainer = createElement('div', ['thirdContainer'], '')
	const subtractImg = createElement('img', ['subtract'], 'img3')
	subtractImg.src = './assets/images/win_and_lose_img/Subtract.png'

	const thirdOverlay = createElement('div', ['thirdOverlay'], '')
	const title = createElement('h2', ['title'], '')
	title.append('You Win!')
	const subtitle = createElement('h4', ['subtitle'], '')
	subtitle.append('Congratulations')

	const catchItem = createElement('div', ['item'], '')
	const Catch = createElement('p', ['name'], '')
	Catch.append('Catch:')
	const catchScore = createElement('p', ['score'], '')
	catchScore.append(`${data.catchPoints}`)
	catchItem.append(Catch, catchScore)

	const missItem = createElement('div', ['item'], '')
	const Miss = createElement('p', ['name'], '')
	Miss.append('Miss:')
	const missScore = createElement('p', ['score'], '')
	missScore.append(`${data.missPoints}`)
	missItem.append(Miss, missScore)

	const restartButton = RestartButton()

	thirdOverlay.append(title, subtitle, catchItem, missItem, restartButton)
	thirdContainer.append(subtractImg, thirdOverlay)
	firstOverlay.append(thirdContainer)
	firstContainer.append(secondContainer, firstOverlay)
	mainWrapper.append(firstContainer)

	return mainWrapper
}
