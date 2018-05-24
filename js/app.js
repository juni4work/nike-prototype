
const searchBtn = document.querySelector('.search');
const searchBox = document.querySelector('.searchBox');
const closeBtn = document.querySelector('.closeSearch');
const vanishBtn = document.querySelector('.vanish');
const products = document.querySelector('.products');
const basket = document.querySelector('.basket');
const closeBasket = document.querySelector('.closeCart');
const cart	= document.querySelector('.cart');
const mainSec = document.querySelector('#main');

searchBtn.addEventListener('click',openSearch);
closeBtn.addEventListener('click',closeSearch);
basket.addEventListener('click', function(event){
		event.preventDefault;
		revealAnim(cart);
		cart.className += ' open';
});
closeBasket.addEventListener('click', function(event){
		event.preventDefault;
		cart.className = 'cart';

});


function openSearch(event){
	event.preventDefault;

	searchBox.className += ' open';

}


function closeSearch(event){
	event.preventDefault;

	searchBox.className = 'searchBox';

}

const productItems = document.querySelectorAll('.products > ul > li');

for(let i=0 ; i< productItems.length ; i++){

	productItems[i].addEventListener("mouseenter",function(event){
		let bg = event.target.getAttribute('data-bg');
		mainSec.className = bg;
	});

	productItems[i].addEventListener("mouseleave",function(event){
		mainSec.className = "grad-main";
	})
}


function revealAnim (element){
	let childs = element.children;
	console.log(childs.length);



		for(let i=0; i<childs.length ; i++){

			childs[i].className += ' wow fadeInUp';		
			
		}


}


new WOW().init();