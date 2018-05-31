
//let displayBlank = document.querySelector('.display-blank');
//displayBlank.style.visibility = "hidden"; 
var input = document.querySelector('input');
var setWord = document.querySelector('#form');
var arr = [];


console.log(input)

// after the user types any word, either click on the botton or enter the form will disappear
setWord.addEventListener('submit', function(e){
	e.preventDefault();

	//after user hit enter, form will be hidden
	document.querySelector('form').style.visibility = 'hidden';
	
	
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
	//var arr = [];
	
	for(var i = 0; i < content.length; i++){
		arr.push(content[i]);

	}


	console.log(arr);

	console.log(`length is ${arr.length}`);

	//if user enters any letter, it will create no. of divs according to the arr.lenght
	if(arr.length > 0){
		for(var i = 0; i < arr.length; i++){
			var div = document.createElement('div');
			div.classList.add('display-empty');
			document.querySelector('.blank').appendChild(div);
			//assign each item in the array to each div
			//div.innerText = arr[i].toUpperCase();
			div.innerText = arr[i].toUpperCase();
			div.style.display = "none";
		

		}

	} //end if statement

	//if the p2 player mouse click on letter, it will compare that letter the the arr. 
	//If there is matching letter(s), it will display on the div
	var checkButton = document.querySelector('.alphabet');
	checkButton.addEventListener('click', function(e){
		e.preventDefault();

		var checkButton = document.getElementsByClassName('alphabet');
		for(var i = 0; i < letterButton.length; i++){
			console.log(letterButton[i]);
		}

		// for(var i = 0; i < arr.length; i++) {

		// 	 if(arr[i] === this.innerText){
		// 	 	var emptySpace = document.querySelectorAll('.display-empty')[i]
		// 	 	emptySpace.style.display = 'block';
		// 	 	console.log(emptySpace);
		// 	 	// for(var j = 0; j < emptySpace.length; j++ ){
		// 	 	// 	document.querySelector('.display-empty').style.visibility = 'visible'; 

		// 	 	// }
			 	
		// 	 }
		// } // end for loop
	}) // end checkButton


}) // end eventListener for set word



// function displayGuessingWord(e){
// 	e.preventDefault();

// 	if(e.target.className	=== 'alphabet')
// 	var emptySpace = document.querySelector('.blank');
// 	emptySpace.classList.toggle('.display-empty')

// }

