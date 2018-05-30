console.log('Hello, I here');


//let displayBlank = document.querySelector('.display-blank');
//displayBlank.style.visibility = "hidden"; 
let input = document.querySelector('input');
let setWord = document.querySelector('#set-word');

console.log(input)

// after the user types any word, either click on the botton or enter the form will disappear
setWord.addEventListener('click', function(e){
	e.preventDefault();

	//after user hit enter, form will be hidden
	document.querySelector('form').style.visibility = "hidden";
	
	
	//assign input from user to class blank
	let diplayContent = document.querySelector('.blank').innerText = input.value;
	
	
	
	
})


function displayGuessingWord(){
	let emptySpace = document.querySelector('.blank');
	emptySpace.classList.toggle('.display-empty')

}

