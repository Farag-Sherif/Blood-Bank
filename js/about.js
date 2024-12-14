// add class name to all questions and when click on question diaplay answer

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
	
	displayElement(element , index , reangeOfQuestions);
})

// loading more element when click on load More in about page

let loadMoreQuestion = document.querySelector('.Frequently .button')

displayMore(loadMoreQuestion , reangeOfQuestions , boxsOfQuestions , 'flex')







