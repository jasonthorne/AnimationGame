console.log("Hi!");


//testNameArray
 var playerNames  = [ "test1",  "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test9", "test10" ];
 var playerScores  = [ 25, 3, 20, 40, 99, 54, 63, 5, 78, 15 ]; 
 
 var currentPlayer = "YOU";
 var currentScore = 50;
 
 playerNames.push(currentPlayer); 
 playerScores.push(currentScore);
 
 let players = playerNames.map(function (currElement, i) { //(val of curr element, index of curr element)
    return {name: currElement, score: playerScores[i]}; //return an object with keys/values to array
 }).sort((a, b) => (a.score < b.score) ? 1 : -1); //sort array objects by score
 
 
 for (let i=0, j=players.length; i<j; i++){

	let playerContainer = makeElement("div", "player-container"); 
	let player = null;
	let playerName = makeElement("div", "player-name"); //player-name div
	let playerScore = makeElement("div", "player-score"); //player-score div
	playerScore.appendChild(document.createTextNode(players[i].score)); //add object's score value to div

	if (players[i].name == currentPlayer){ //if current player:

		player = makeElement("div", "current-player"); //create a 'current-player' div


		/* -----------------------------------------*/
			
			let testDivContainer = makeElement("div", "testDivContainer"); 

			let testBtn = makeElement("input", "test-Btn");
			//testBtn.innerHTML = "yo dawg!";
		   testBtn.type = "button";
		   testBtn.value = "yo";

			  // https://trans4mind.com/personal_development/JavaScript2/createSelectDynamically.htm?

		  // https://www.google.com/search?q=dynamically+create+a+form+with+javascript&rlz=1C1CHBF_enIE863IE863&oq=dynamically+create+a+form&aqs=chrome.0.0j69i57j0l3j69i60.15123j1j4&sourceid=chrome&ie=UTF-8
	   
			///////////////////////testDivContainer.appendChild(testBtn); 

		   ////////////////// playerContainer.appendChild(testDivContainer); 
			
			 /* -----------------------------------------*/
			
			let nameForm = makeElement("form", "name-form"); //create html form
			let nameInput = makeElement("input", "name-input"); //create input field
			nameInput.type = "text"; //type text
			nameInput.placeholder = "Enter name"; //placeholder text

			nameForm.appendChild(testBtn); //++++++++++++++++++++++++++++++++++++++++

			nameForm.appendChild(nameInput); //add input field to form

			playerName.appendChild(nameForm); //to nameForm for entering of name
			
			/*
			testBtn.onclick = function() {
				console.log("Yo");
				//nameForm.prevent
				//nameForm.submit();
			}*/
		

		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	   
		/*
		if((players[i].score > lowestScore) && (players[i].score > prevScore)){ //if score elegable for save: 
		
		   
			
			let testDivContainer = makeElement("div", "testDivContainer"); 

			let testBtn = makeElement("button", "test-Btn");
			testBtn.innerHTML = "yo dawg!";
			testDivContainer.appendChild(testBtn); 
			playerContainer.appendChild(testDivContainer); 


		  
			let nameForm = makeElement("form", "name-form"); //create html form
			let nameInput = makeElement("input", "name-input"); //create input field
			nameInput.type = "text"; //type text
			nameInput.placeholder = "Enter name"; //placeholder text
			nameForm.appendChild(nameInput); //add input field to form

			playerName.appendChild(nameForm); //to nameForm for entering of name
			


		
		}else{ //score not elegabile for save:
			playerName.appendChild(document.createTextNode("YOU")); //+++++++++++++REPLACE THIS 'YOU' :P 
		 }    

		 */
			 
	}else{ //a former player:
		player = makeElement("div", "former-player"); 
		playerName.appendChild(document.createTextNode(players[i].name)); //add object's name value to div
	}
	

	player.appendChild(playerName); //add playerName div to player
	player.appendChild(playerScore); //add playerScore div to player

	playerContainer.appendChild(player); //add player to player-container

	document.getElementById("players-container").appendChild(playerContainer); //add player-container div to players-container div

    }
 
 
 