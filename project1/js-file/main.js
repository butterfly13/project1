
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


			div.style.display = "block";
		}

		
			

	} //end if statement

	//if the p2 player mouse click on letter, it will compare that letter the the content. 
	//If there is matching letter(s), it will display on the div
	var listOfAlphabet = document.querySelector('.list-of-alphabet');
	listOfAlphabet.addEventListener('click', alphabetCheck)

	 


}) // end eventListener for set word



 function alphabetCheck(e){
		e.preventDefault();

			// get the value of each alphabet when user clicks and make it all to lowercase for comparison
			var alphabet = e.target.innerText.toLowerCase();
			var span = document.querySelectorAll('span');

			
			console.log(content);
			console.log(alphabet);
			// to loop over the array input and compare with the click botton if it matches
			//if it matches, will display that letter
			content.forEach(function(currentContent, index){
				if (currentContent === alphabet){
					span[index].style.opacity = "1";
				}
				
			});

		
	} // end alphabetCheck function

