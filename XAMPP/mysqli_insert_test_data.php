<?php
			
	require_once('mysqli_connect.php'); //make connection file avaliable

	//attempt insert query execution:
	$query = "INSERT INTO players (player_name, player_score) VALUES
	('John', 10),
	('Clark', 5),
	('John', 3),
	('Harry', 1)";

	$response = @mysqli_query($dbc, $query); //$conn->query($sql);


	
	if(mysqli_query($response, $query)){
	echo "Records added successfully.";
	} else{
	echo "ERROR: Could not able to execute";
	}
	

	/*
		<?php include("mysqli_insert_test_data.php"); ?>
	*/




	/*
	if ($response->num_rows > 0) {
		// output data of each row
		while($row = $response->fetch_assoc()) {
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
	*/

	mysqli_close($dbc);
?> 