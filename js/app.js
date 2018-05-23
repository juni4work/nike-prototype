
const searchBtn = document.querySelector('.search');
const searchBox = document.querySelector('.searchBox');
const closeBtn = document.querySelector('.closeSearch');
const vanishBtn = document.querySelector('.vanish');
const products = document.querySelector('.products');
const basket = document.querySelector('.basket');
const mainSec = document.querySelector('#main');

searchBtn.addEventListener('click',openSearch);
closeBtn.addEventListener('click',closeSearch);
basket.addEventListener('click', toggleBasket);

function toggleBasket(){

	if(mainSec.classList.contains('open')){
		mainSec.className = 'home-page'
	}	else {
		mainSec.className += ' open';
	}

	
}

function openSearch(event){
	event.preventDefault;

	searchBox.className += ' open';

}


function closeSearch(event){
	event.preventDefault;

	searchBox.className = 'searchBox';

}


new WOW().init();