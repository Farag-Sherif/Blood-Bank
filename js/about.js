
let questions = document.querySelector('.questions')

let boxsOfQuestions = [...Array.from(questions.children)];

let reangeOfQuestions = 6;

boxsOfQuestions.forEach((element , index)=>{
	
	element.classList.add(`quistion-${index}`);
	
	const acativeQuestion = document.querySelector(`.quistion-${index} .question`);
	
	acativeQuestion.addEventListener('click', ()=>{
		
		const displayAnswer = document.querySelector(`.quistion-${index} p`);
		
		displayAnswer.classList.toggle('active');
		
		const iconOfQuestion = document.querySelector(`.quistion-${index} .question i`);
		
		iconOfQuestion.classList.toggle('active');
	})
	
	displayQuestios(element , index);
})

let loadMoreQuestion = document.querySelector('.Frequently .button')

loadMoreQuestion.addEventListener('click', ()=>{
	const loading = document.querySelector('.loading');
	loading.style.display = 'block';
	loadMoreQuestion.style.display = 'none'
	setTimeout(()=>{
		if(reangeOfQuestions < boxsOfQuestions.length){
			reangeOfQuestions += 6;
			let loadMore = boxsOfQuestions.filter((element, index)=> 
			{ 
				element.style.display= (index < reangeOfQuestions? 'flex': 'none')
			})
		loadMoreQuestion.style.display = 'block'
		}
		if(reangeOfQuestions >= boxsOfQuestions.length -1){
			loadMoreQuestion.style.display = 'none'
		}
		loading.style.display = 'none';
	}, 1000);
})

function displayQuestios(element , index){
	if(index > reangeOfQuestions){
		element.style.display = 'none'
	}
}




