
//let displayBlank = document.querySelector('.display-blank');
//displayBlank.style.visibility = "hidden"; 
var input = document.querySelector('input');
var setWord = document.querySelector('#form');
var content = []
var blankSpace = document.querySelector('.blank');



console.log(input)

// after the user types any word, either click on the botton or enter the form will disappear
setWord.addEventListener('submit', function(e){
	e.preventDefault();

	//after user hit enter, form will be hidden
	document.querySelector('form').style.visibility = 'hidden';
	
	
	// to split the input from user to make it to an array
	content = input.value.split("");
	


	console.log(content);

	console.log(`length is ${content.length}`);

	//if user enters any letter, it will create no. of divs according to the content.lenght
	if(content.length > 0){
		
		for(var i = 0; i < content.length; i++){
			var div = document.createElement('div');
			div.classList.add('underline');
			blankSpace.appendChild(div);
			var span = document.createElement('span')	
			div.appendChild(span); // add a span to 
			span.innerText = content[i];


			 //div.innerText = arr[i].toUpperCase();
			//blankSpace.appendChild(div);

		
			//assign each item in the array to each div
			//div.innerText = arr[i].toUpperCase();
			// div.innerText = arr[i].toUpperCase();
			//div.style.display = "block";

			div.style.display = "block";
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

