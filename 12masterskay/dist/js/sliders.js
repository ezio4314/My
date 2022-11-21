const prev = document.getElementById('btn_prev')
const next = document.getElementById('btn_next')
const slides = document.querySelectorAll('.slide_promo')

let index = 0

const activeSlide = n => {
	for(slide_promo of slides) {
		slide_promo.classList.remove('active')
	}
	slides[n].classList.add('active')
}

const nextSlide = () => {
	if(index == slides.length - 1) {
		index = 0
		activeSlide(index)
	} else {
		index++
		activeSlide(index)
	}
}

const prevSlide = () => {
	if(index == 0) {
		index = slides.length - 1
		activeSlide(index)
	} else {
		index--
		activeSlide(index)
	}
}

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

setInterval(nextSlide, 5000)

//слайдер отзывов для мобилки

const left = document.getElementById('reviews_button_left')
const right = document.getElementById('reviews_button_right')
const cardR = document.querySelectorAll('.reviews_card')

let indexR = 0

const activeCard = n => {
	for(reviews_card of cardR) {
		reviews_card.classList.remove('activeR')
	}
	cardR[n].classList.add('activeR')
}

const rightCard = () => {
	if(indexR == cardR.length - 1) {
		indexR = 0
		activeCard(indexR)
	} else {
		indexR++
		activeCard(indexR)
	}
}

const leftCard = () => {
	if(indexR == 0) {
		indexR = cardR.length - 1
		activeCard(indexR)
	} else {
		indexR--
		activeCard(indexR)
	}
}

right.addEventListener('click', rightCard)
left.addEventListener('click', leftCard)

setInterval(rightCard, 5000)