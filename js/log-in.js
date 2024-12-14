// Defining entries in the variables of the login page and sing up

let form = document.getElementById('form')
let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let confirmPasswordInput = document.getElementById('confirm-password')
let phoneInput = document.getElementById('phone')
let cityInput = document.getElementById('city')
let typeOfBloodInput = document.getElementById('type-of-blood')
let birthdayInput = document.getElementById('birthday')
let errorMessage = document.querySelector('.error-message')
let agreeOfAll = document.getElementById('agree')
let textOfAgreeOfAll = document.querySelector('.agree label')


form.addEventListener('submit', (e)=>{

	let errors = []
	
	// Check if nameInput exists, then call the appropriate form function
	
	if(nameInput){
		errors = singUpForm(
					nameInput.value,
					emailInput.value,
					passwordInput.value,
					confirmPasswordInput.value,
					phoneInput.value, 
					cityInput.value, 
					typeOfBloodInput.value,
					birthdayInput.value
					)
	}else{
		errors = logInForm(
					emailInput.value,
					passwordInput.value
					)
	}
	
	// If there are any errors, prevent form submission and display errors
	
	if(errors.length > 0){
		e.preventDefault();
		errorMessage.innerText = errors.join(' & ')
		console.log(errors)
	}
})

// Function to validate sign-up form fields

function singUpForm(name, email, password, confirmPassword, phone, city, typeOfBlood, birthday){
	let errors = [];
	
	if(!name){
		errors.push("The Name is requare")
		nameInput.classList.add('incorrect')
	}
	if(!email){
		errors.push("The Email is requare")
		emailInput.classList.add('incorrect')
	}
	if(!password || password.length < 8){
		errors.push("Password must have at least 8 characters")
		passwordInput.classList.add('incorrect')
	}
	if(!phone){
		errors.push("The Phone is requare")
		phoneInput.classList.add('incorrect')
	}
	if(!city || city === "City"){
		errors.push("The City is requare")
		cityInput.classList.add('incorrect')
	}
	if(!typeOfBlood || typeOfBlood === "Blood Type"){
		errors.push("The Type Of Blood is requare")
		typeOfBloodInput.classList.add('incorrect')
	}
	if(!birthday){
		errors.push("The Birthday is requare")
		birthdayInput.classList.add('incorrect')
	}
	if(!confirmPassword || confirmPassword !== password){
		errors.push("Password does not match confirm password")
		confirmPasswordInput.classList.add('incorrect')
	}
	if(!agreeOfAll.checked){
		textOfAgreeOfAll.style.color = 'var(--red)'
		errors.push("You must agree of All ")
	}
	return errors;
}

// Function to validate login form fields

function logInForm(email, password){
	let errors = [];
	
	if(!email){
		errors.push("The Email is requare")
		emailInput.classList.add('incorrect')
	}
	if(!password || password.length < 8){
		errors.push("Password must have at least 8 characters")
		passwordInput.classList.add('incorrect')
	}
	return errors;
}

let allInputs = [
					nameInput,
					emailInput,
					passwordInput,
					confirmPasswordInput,
					phoneInput, 
					cityInput, 
					typeOfBloodInput,
					birthdayInput,
					agreeOfAll
				]

// Adding event listeners for each input field to handle user input

allInputs.forEach((input)=>{
	if(input){
		if(input === agreeOfAll){
			
			 // Special handling for the "agree" checkbox input
			 
			agreeOfAll.addEventListener('input',()=>{
				textOfAgreeOfAll.style.color = '#353232'
				errorMessage.innerText = ''
			})
		}
		
		// Event listener to remove the 'incorrect' class when user types in an input field
		
		input.addEventListener('input', ()=>{
			if(input.classList.contains('incorrect')){
				input.classList.remove('incorrect')
				errorMessage.innerText = ''
			}
		})
	}
})
















