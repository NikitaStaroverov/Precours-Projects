import { data } from '../../../data.js'
import { createElement } from '../../../ui-kit/helper.js'
import { Image } from '../../../ui-kit/ui-kit.js'
import { RestartButton } from '../buttons/RestartButton.js'

export function Win() {
	const mainWrapper = createElement('div', ['mainWrapper'], '')
	const firstContainer = createElement('div', ['firstContainer'], '')

	const secondContainer = createElement('div', ['secondContainer'], '')
	const ellipseImg = Image(
		'img',
		['ellipse'],
		'img1',
		'./assets/images/win_and_lose_img/ellipse.svg'
	)

	const secondOverlay = createElement('div', ['secondOverlay'], '')
	const groupImg = Image(
		'img',
		['group'],
		'img2',
		'./assets/images/win_and_lose_img/group.svg'
	)

	secondOverlay.append(groupImg)
	secondContainer.append(ellipseImg, secondOverlay)

	const firstOverlay = createElement('div', ['firstOverlay'], '')
	const thirdContainer = createElement('div', ['thirdContainer'], '')

	const subtractImg = Image(
		'img',
		['subtract'],
		'img3',
		'./assets/images/win_and_lose_img/Subtract.png'
	)

	const thirdOverlay = createElement('div', ['thirdOverlay'], '')
	const title = createElement('h2', ['title'], '')
	title.append('You Win!')
	const subtitle = createElement('h4', ['subtitle'], '')
	subtitle.append('Congratulations')

	// вынести в отдельную fun
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
