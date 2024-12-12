// display header list
let listIcone = document.querySelector('.header #bars')
let listItems = document.querySelector('.header .list')

listIcone.addEventListener('click', ()=>{
	listItems.classList.toggle('active');
})

// move up bottom
let moveUpButton = document.querySelector(".move-up");

	
let positionOfScrollIncrease = 0;

document.addEventListener('scroll', function() {
	
	const positionOfScroll = window.scrollY;

	if(positionOfScrollIncrease < positionOfScroll){
		
		moveUpButton.style.opacity = "1";
		moveUpButton.style.visibility = "visible";
		positionOfScrollIncrease = positionOfScroll
		
		
	}else{
		moveUpButton.style.opacity = "0";
		moveUpButton.style.visibility = "collapse";
		positionOfScrollIncrease = positionOfScroll
	}
	
});

























