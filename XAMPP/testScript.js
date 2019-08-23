


		 

		///////+++++++++++++++++++++++++++++++++++++++++++
		var testName = "bob";
		var testScore = 11;
		///////+++++++++++++++++++++++++++++++++++++++++++

		


		function test(){

			//////////////////////////////////////////
			console.log(playerNames);
			console.log("y");
			console.log(playerScores);
			///console.log(lowestScore);
			//////////////////////////////////////////

			//makeScores();
			//make array of score objects 
			
		}


		function makeScores(){ //SHOULD PROBABLY PASS IN AN ARRAY OF OBJECTS HOLSING PLAYER NAMES AND SCORES ++++++++++++++++++++++++++++++++++++++++


			
			console.log("yo");
			console.log(playerNames);
			console.log(playerScores);
			console.log(lowestScore);
			


			//div for holding player name & score divs:
			let scoreVals = document.createElement("div"); //create div
			scoreVals.className = "score-values"; //give classname for styling

			//player name div:
			let playerName = document.createElement("div"); //create div
			playerName.className = "player-name"; //give classname for styling
			let playerNameTxt = document.createTextNode("player's name"); //create text node for player name  //+++++++++++++++++++++++++++PULL FROM DB TO PROVIDE THIS!! 
			playerName.appendChild(playerNameTxt); //add text to div

			//player score div:
			let playerScore = document.createElement("div"); //create div
			playerScore.className = "player-score"; //give classname for styling
			let playerScoreTxt = document.createTextNode("00"); //create text node for player score  //+++++++++++++++++++++++++++PULL FROM DB TO PROVIDE THIS!! 
			playerScore.appendChild(playerScoreTxt); //add text to div

			//add playerName & playerScore to scoreVals:
			scoreVals.appendChild(playerName);
			scoreVals.appendChild(playerScore);
			
			document.getElementById("scores-container").appendChild(scoreVals); //add div to scores-container
			
			/*
			console.log("yo");
			console.log(playerNames);
			console.log(playerScores);
			console.log(lowestScore);
			*/
		}
	  