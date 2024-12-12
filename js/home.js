// function of add active class

function addClassActive(element , scroll){
	
	const positionOfElement = element.offsetTop - 700;
	
	if(positionOfElement <= scroll){
	
		element.classList.add('active')
	
	}
} 

// animation of sections in home page
document.addEventListener('scroll', function() {
	
	const positionOfScroll = window.scrollY;
	
	// animation of scroll Of Start Praghraph
	
	addClassActive(document.querySelector('.start') , positionOfScroll)

	// animation of scroll of all title page
	
	const positionOfTitles = document.querySelectorAll('.title')
	positionOfTitles.forEach((element)=> addClassActive(element , positionOfScroll))
	
	// animatio of scroll for section of process
	
	addClassActive(document.querySelector('.process .processes') , positionOfScroll)

	
	// animatio of scroll for section of Campaigns
	
	const positionOfBoxsInCampaing = document.querySelectorAll('.campaigns .boxs .box')
	positionOfBoxsInCampaing.forEach((element)=> addClassActive(element , positionOfScroll))
	
	// animatio of scroll for section of helpful
	
	addClassActive(document.querySelector('.helpful .helpful-Information') , positionOfScroll)
});
