// data
const info = {
	title: 'it-incubator',
	graduatesCount: 2000,
	areYouChampion: true,
	technologies: [{ title: 'Front' }, { title: 'Back' }, { title: 'DevOps' }],
}

// render
let pageTitleElement = document.createElement('h1')
pageTitleElement.innerText = info.title
document.body.append(pageTitleElement)

let graduatesCountElement = document.createElement('input')
graduatesCountElement.value = info.graduatesCount
document.body.append(graduatesCountElement)

let areYouChampionElement = document.createElement('input')
areYouChampionElement.type = 'checkbox'
areYouChampionElement.checked = info.areYouChampion
document.body.append(areYouChampionElement)

//select
let tehSelectElement = document.createElement('select')

let tehSelectOptions0Element = document.createElement('option')
tehSelectOptions0Element.append(info.technologies[0].title)

let tehSelectOptions1Element = document.createElement('option')
tehSelectOptions1Element.append(info.technologies[1].title)

let tehSelectOptions2Element = document.createElement('option')
tehSelectOptions2Element.append(info.technologies[2].title)

tehSelectElement.append(
	tehSelectOptions0Element,
	tehSelectOptions1Element,
	tehSelectOptions2Element
)

document.body.append(tehSelectElement)
