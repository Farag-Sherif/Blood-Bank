
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

// add class name to all boxs in campaigns 

let campaigns = document.querySelector('.campaigns .boxs')

let boxsOfCampaigns = [...Array.from(campaigns.children)];

let reangeOfCampaigns = 2;

boxsOfCampaigns.forEach((element , index)=>{
	
	element.classList.add(`campaign-${index}`);
	
	displayElement(element , index , reangeOfCampaigns);
})

// loading more element when click on see More in home page

let loadMoreCampaigns = document.querySelector('.campaigns .see-more')

displayMore(loadMoreCampaigns , reangeOfCampaigns , boxsOfCampaigns , 'block')







