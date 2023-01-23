 let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

// Меню бургер

const iconBurger = document.querySelector('.burger_icon');
const headerNav = document.querySelector('.header_nav');
if (iconBurger){
	iconBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconBurger.classList.toggle('active');
		headerNav.classList.toggle('active');
	});
}

if (iconBurger.classList.contains('active')) {
	document.body.classList.remove('lock');
	iconBurger.classList.remove('active');
	headerNav.classList.remove('active');
}

// Плавная прокрутка при клике

const headerLinks = document.querySelectorAll('.header_link[data-goto]');
if (headerLinks.length > 0) {
	headerLinks.forEach(headerLink => {
		headerLink.addEventListener("click", onHeaderLinkClick);
	});

	function onHeaderLinkClick(e) {
		const headerLink = e.target;
		if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)){
			const gotoBlock = document.querySelector(headerLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect(). top + pageYOffset - document.querySelector('header').offsetHeight;
		
			if (iconBurger.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconBurger.classList.remove('active');
				headerNav.classList.remove('active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

