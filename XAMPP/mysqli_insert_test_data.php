<?php
			
	require_once('mysqli_connect.php'); //make connection file avaliable
	//================================

	/*

	/////////////////////////////////
	$servername = DB_HOST; //CHECK IF YOU CAN JUST PASS IN DB_HOST!!!! +++++++++++
	$username = DB_USER;
	$password = DB_PASSWORD;
	$dbname = DB_NAME;

	////////////////////////////////
	*/

	/*
	// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());

		//STORE RESULT IN BOOLEAN FOR JS CHANGES!! ++++++++++
	}
	*/

	
	//CHECK IF ALL OF ABOVE CAN BE IN THE SAME FILE!!!!++++++++++++++++++++++++++++++


	//=======================================
	//attempt insert query execution:
	$sql = "INSERT INTO players (player_name, player_score) VALUES
	('John', 10);";
	$sql .= "INSERT INTO players (player_name, player_score) VALUES
	('Mary', 5);";
	$sql .= "INSERT INTO players (player_name, player_score) VALUES
	('bob', 2);";

	//$response = @mysqli_query($dbc, $query); //$conn->query($sql);
	//////////$conn = $dbc;
	
	
	////if(mysqli_query($conn, $sql)){
	if (mysqli_multi_query($dbc, $sql)) {
	echo "Records added successfully.";
	} else{
	echo "ERROR: Could not able to execute";
	}
	

	/*
		<?php include("mysqli_insert_test_data.php"); ?>


		<!--<?php include("testScoreboard.php"); ?>-->

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

	/////////mysqli_close($conn);
	mysqli_close($dbc);
?> 