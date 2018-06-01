
//let displayBlank = document.querySelector('.display-blank');
//displayBlank.style.visibility = "hidden"; 
var input = document.querySelector('input');
var setWord = document.querySelector('#form');
var getWord = document.querySelector('.get-word');
var content = [];
var blankSpace = document.querySelector('.blank');
var numOfWrongClick = 0;
var reset = document.querySelector('.restartButton');


// after the user types any word, either click on the botton or enter the form will disappear
setWord.addEventListener('submit', function(e){
	e.preventDefault();
		

		// to split the input from user to make it to an array
		content = input.value.split("");

		//to loop through each in array and make it all to uppercase
		//to prevent the problem when the user enters mix uppercase and lowercase
		for(var i = 0; i < content.length; i++){
			content[i] = content[i].toUpperCase();
		}

		//content.forEach(currentContent => currentContent = currentContent.toUpperCase());
		
		console.log(`content array uppercase ${content}`)
		
		

	//if user enters any letter, it will create no. of divs according to the content.lenght
	//after user hit enter, form will be hidden
	if(content.length > 0){
		document.querySelector('form').style.visibility = 'hidden';

		for(var i = 0; i < content.length; i++){
			var div = document.createElement('div');
			if(content[i] === "") {
				 	//var div = document.createElement('div');
				div.classList.add('underline');
				var addBlank = blankSpace.appendChild(div);
				div.style.borderBottom = "hidden";
				var span = document.createElement('span');
				span.classList.add('displayText');	
				div.appendChild(span); // add a span to a div
				// make the input array to display to uppercase 
				//console.log(`uppercase input ${content[i].toUpperCase()}`);
				console.log(content[i].toUpperCase());
				span.innerText = content[i];

				
			} else {
					//var div = document.createElement('div');
				div.classList.add('underline');
				blankSpace.appendChild(div).style.borderBottom = "2px solid yellow";
				var span = document.createElement('span');
				span.classList.add('displayText');	
				div.appendChild(span); // add a span to a div
				// make the input array to display to uppercase 
				//console.log(`uppercase input ${content[i].toUpperCase()}`);
				console.log(content[i].toUpperCase());
				span.innerText = content[i];
			
			}
			//var div = document.createElement('div');
			// div.classList.add('underline');
			// blankSpace.appendChild(div);
			// var span = document.createElement('span');
			// span.classList.add('displayText');	
			// div.appendChild(span); // add a span to a div
			// make the input array to display to uppercase 
			//console.log(`uppercase input ${content[i].toUpperCase()}`);
			//console.log(content[i].toUpperCase());
			//span.innerText = content[i];
			
			

			div.style.display = "block";
		}
		
		//if user doesn't enter anything, this warning will pop-up the warning text
	} else {
		var alertText = document.querySelector('.alertText');
		alertText.style.display = "block";
	} //end if statement


	//if the p2 player mouse click on letter, it will compare that letter the the content. 
	//If there is matching letter(s), it will display on the div
	var listOfAlphabet = document.querySelector('.list-of-alphabet');
	listOfAlphabet.addEventListener('click', alphabetCheck)

	
}) // end eventListener for set word



 function alphabetCheck(e){
		e.preventDefault();

			// get the value of each alphabet when user clicks and make it all to lowercase for comparison
			// var alphabet = e.target.innerText.toLowerCase();
			var alphabet = e.target.innerText;
			var span = document.querySelectorAll('.displayText');
			console.log(content);
			console.log(alphabet);
			// to loop over the array input and compare with the click botton if it matches
			//if it matches, will display that letter
			content.forEach(function(currentContent, index){
				if (currentContent === alphabet){
					span[index].style.opacity = "1";
				} 
				
			}); // end forEach

			if((content.indexOf(alphabet) < 0) ){
				wrongClick();
			}

		
	} // end alphabetCheck function

	function wrongClick (){
		numOfWrongClick ++;
		console.log(`number of wrong click ${numOfWrongClick}`);
		if(numOfWrongClick === 10){
			console.log("game over!!!!");
			document.querySelector('.gameOver').style.display = "block";
			document.querySelector('.restartButton').style.display = "block";

		}

	}// end wrongClick function

//reset to the page
reset.addEventListener('click', resetFunction);

function resetFunction(){
	
	location.reload();
	
}


	//Check for winner
	function checkWinner (e){
		e.preventDefault();
		var winner = document.querySelector('body')
		if(numOfWrongClick > 10){
			winner.style.display.innerHTML = "<h1>GAME OVER";
		} else {
			winner.style.display.innerHTML = "<h1>YOU ARE THE WINNER!!!</h1>"
		}


	}

