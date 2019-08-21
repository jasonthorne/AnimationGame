<!DOCTYPE html>
<html>

	<head>
		<?php include("dbLogin.php"); ?>
		<script type="text/javascript" src="testScript.js"> </script>
	</head>
	<body>

		<?php
				
			$servername = $dbLoginServername;
			$username = $dbLoginUsername;
			$password = $dbLoginPassword;
			$dbname = $dbLoginDbname;

			$playerNames = array();
			$playerScores = array();
			$lowestScore = PHP_INT_MAX;
			
			//STORE SOME ERROR MSG HERE IF CONNNECTIN DOESNT WORK. CHABGE SCOREBOARD LAYOUT IF NO CONNECTION, GIVING THIS STORED MESSAGE.
			
			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
				//add to a php > js boolean to show connection fail. (for suitable changes to display).
			} 

			$sql = "SELECT player_name, player_score FROM players";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					//echo "<br> player_name: ". $row["player_name"]. " - player_score: ". $row["player_score"]. "<br>"; ///////////////////////////

					//store row data:
					array_push($playerNames, $row["player_name"]);
					array_push($playerScores, $row["player_score"]);
					
					//find & store lowest score:
					$tempScore = $row["player_score"];
					if ($tempScore < $lowestScore) {
						$lowestScore = $tempScore;
					}
			
				}
			} else {
				echo "0 results";
			}
			
			////////////$sql = null;

			$conn->close();
		?> 


		<!--passing PHP variables to Javascript: -->
		<script>
			
			var playerNames = <?php echo '["' . implode('", "', $playerNames ) . '"]' ?>; //passing player names
		 	var playerScores = <?php echo '[' . implode(', ', $playerScores ) . ']' ?>; //passing player scores
		 	var lowestScore = <?php echo $lowestScore ?>; //passing value of lowest score

			/*
			console.log(playerNames);
			console.log(playerScores);
			console.log(lowestScore);
			*/



			//////////////////////////test();


		/*
		for (let i=0; i<6; i++){
			makeScores();
		}
			*/
			//makeScores();

		
		</script>

	</body>
</html>