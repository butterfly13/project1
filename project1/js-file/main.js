
//let displayBlank = document.querySelector('.display-blank');
//displayBlank.style.visibility = "hidden"; 
var input = document.querySelector('input');
var setWord = document.querySelector('#set-word');


console.log(input)

// after the user types any word, either click on the botton or enter the form will disappear
setWord.addEventListener('click', function(e){
	e.preventDefault();

	//after user hit enter, form will be hidden
	document.querySelector('form').style.visibility = "hidden";
	
	
	//assign input from user to class blank
	// let displayContent = document.querySelector('.blank').innerText = input.value;
	// let str = "";
	// let content = displayContent.split("");
	// for(let i = 0; i <= content.length; i++){
	// 	str = content[i];
	// 	console.log(str);
	// }
	
	// to split the input from user to make it to an array
	var content = input.value.split("");
	var arr = [];
	
	for(var i = 0; i < content.length; i++){
		arr.push(content[i]);

	}

	
	
})








function displayGuessingWord(){
	//let
	var emptySpace = document.querySelector('.blank');
	emptySpace.classList.toggle('.display-empty')

}

