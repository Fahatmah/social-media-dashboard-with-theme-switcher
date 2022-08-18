const themeSlider = document.getElementById('themeSlider')
const toggleSlider = document.getElementById('toggleSlider')
const bodyBg = document.querySelector('body')
const veryDarkTxts = document.querySelectorAll('.light-neutral-clr-900')
const smallDarkTxts = document.querySelectorAll('.light-neutral-clr-600')
const cardsBg = document.querySelectorAll('.light-card-bg-clr')
const borderBottom = document.querySelector('.title_board')
const body = document.body
const bgTop = document.createElement('div')

body.append(bgTop)
bgTop.classList.add('bg-top')

toggleSlider.addEventListener('click', (e) => {
	themeSlider.classList.toggle('gradient-bg')
	toggleSlider.classList.toggle('dark')
	bodyBg.classList.toggle('dark-theme')
	bgTop.classList.toggle('dark-bg-top')

	veryDarkTxts.forEach((toLightTxt) => {
		toLightTxt.classList.toggle('dark-txts')
  })
  
  cardsBg.forEach(card => {
    card.classList.toggle('card-dark-bg')
  })

  smallDarkTxts.forEach(toLightGrayTxt => {
    toLightGrayTxt.classList.toggle('gray-txt')
  }) 

  borderBottom.classList.toggle('dark-border-bottom')
})
