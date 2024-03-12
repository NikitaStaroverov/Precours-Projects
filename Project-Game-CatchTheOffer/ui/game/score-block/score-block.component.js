import { data } from '../../../data.js'
import { createElement } from '../../../ui-kit/helper.js'

export function ScoreBlock() {
	const scoreBlock = createElement('div', ['scoreBlock'], '')

	const catchItem = createElement('div', ['wrapCount'], '')
	const Catch = createElement('p', ['textCount'], '')
	Catch.append('Catch:')
	const catchScore = createElement('p', ['count'], '')
	catchScore.append(`${data.catchPoints}`)
	catchItem.append(Catch, catchScore)

	const missItem = createElement('div', ['wrapCount'], '')
	const Miss = createElement('p', ['textCount'], '')
	Miss.append('Miss:')
	const missScore = createElement('p', ['count'], '')
	missScore.append(`${data.missPoints}`)
	missItem.append(Miss, missScore)

	scoreBlock.append(catchItem, missItem)

	return scoreBlock
}
