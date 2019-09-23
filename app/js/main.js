
/****************СКРИПТ ДЛЯ МЕНЮ***************/


let	menuBtn = document.querySelector('.menu-btn'),
	navbar = document.querySelector('.header__nav'),
	blackBg = document.querySelector('.header__black-bg'),
	iphone = document.querySelector('.banner__iphone'),
	iphoneImg = document.querySelector('.banner__iphone-img');
	


menuBtn.addEventListener('click', function(){

	menuBtn.classList.toggle("header__btn--closed");

	navbar.classList.toggle("header__nav--closed");

	blackBg.classList.toggle("header__black--x");

	iphone.classList.toggle("banner__iphone--closed");

	iphoneImg.classList.toggle("banner__iphone-img--closed");
});
