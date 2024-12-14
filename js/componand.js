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

// function of add active class

function addClassActive(element , scroll){
	
	const topOfElement = element.offsetTop - 700;
	
	if(topOfElement <= scroll){
	
		element.classList.add('active')
	}
}

// loading more element when click on load More in about page or click on see More in home page

function displayMore (Element , range , boxs , typeOfDisplay){
	Element.addEventListener('click', ()=>{
		const loading = document.querySelector('.loading');
		loading.style.display = 'block';
		Element.style.display = 'none'
		setTimeout(()=>{
			if(range < boxs.length){
				range += 6;
				let loadMore = boxs.filter((element, index)=> 
				{ 
					element.style.display= (index < range? typeOfDisplay : 'none')
				})
			Element.style.display = 'block'
			}
			if(range >= boxs.length -1){
				Element.style.display = 'none'
			}
			loading.style.display = 'none';
		}, 1000);
	})
}

// display Element after rewright range

function displayElement(element , index , range){
	if(index > range){
		element.style.display = 'none'
	}
}


















