export function promoSlider() {
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
}