
const searchBtn = document.querySelector('.search');
const searchBox = document.querySelector('.searchBox');
const closeBtn = document.querySelector('.closeSearch');
const vanishBtn = document.querySelector('.vanish');
const products = document.querySelector('.products')

searchBtn.addEventListener('click',openSearch);
closeBtn.addEventListener('click',closeSearch);



function openSearch(event){
	event.preventDefault;

	searchBox.className += ' open';

}


function closeSearch(event){
	event.preventDefault;

	searchBox.className = 'searchBox';

}


new WOW().init();