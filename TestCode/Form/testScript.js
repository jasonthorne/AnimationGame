
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
 

 //-------------------
 console.log(players);
 //------------------
 
 for (let i=0, j=players.length; i<j; i++){

	///////////////////////let playerContainer = makeElement("div", "player-container"); 
	let player = null;
	let playerName = makeElement("div", "player-name"); //player-name div
	let playerScore = makeElement("div", "player-score"); //player-score div
	playerScore.appendChild(document.createTextNode(players[i].score)); //add object's score value to div

	if (players[i].name == currentPlayer){ //if current player:

		player = makeElement("div", "current-player"); //create a 'current-player' div


		/* -----------------------------------------*/
			
		let testBtn = makeElement("input", "test-Btn");
		testBtn.type = "button";
		testBtn.value = "yo";

		/* -----------------------------------------*/
		
		let nameForm = makeElement("form", "name-form"); //create html form
		let nameInput = makeElement("input", "name-input"); //create input field
		nameInput.type = "text"; //type text
		nameInput.placeholder = "Enter name"; //placeholder text

		nameForm.appendChild(testBtn); //++++++++++++++++++++++++++++++++++++++++

		nameForm.appendChild(nameInput); //add input field to form

		nameForm.appendChild(playerScore); //ADD PLAYER SCORE TO FORM ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

		playerName.appendChild(nameForm); //to nameForm for entering of name
			
	}else{ //a former player:
		player = makeElement("div", "former-player"); 
		playerName.appendChild(document.createTextNode(players[i].name)); //add object's name value to div
	}
	

	player.appendChild(playerName); //add playerName div to player
	player.appendChild(playerScore); //add playerScore div to player

	playerContainer.appendChild(player); //add player to player-container

	document.getElementById("players-container").appendChild(playerContainer); //add player-container div to players-container div

}
 
 
//make a html element with classname:
function makeElement(type, className){ 
	let element = document.createElement(type); //create element
	element.className = className; //give classname
	return element;
}



//+++++++++++++++++++++++++++++++
function testClick(){
	console.log("yo");
}
//+++++++++++++++++++++++++++++++