<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="UTF=8">
		<title>Apple Catch</title>
		<link href="https://fonts.googleapis.com/css?family=Bubblegum+Sans&display=swap" rel="stylesheet"> <!--Google font import-->
		<link type="text/css" rel="stylesheet" href="style.css">
        <script type="text/javascript" src="script.js" defer > </script> <!-- 'defer' waits until page is loaded before execution-->
	</head>

	<!--<body onload = "showIntroModal()"> --> <!--show intro modal on page load-->
	<body onload = "showScoreModal()">
			<!------------------------	<body onload = "showScoreModal();">------------------------------------------------------------->
		
		<?php
        $servername = "localhost";
        $username = "########";
        $password = "######";
        $dbname = "#######";
		
		////////////////////
		$testA = array();
		$testB = array();
		///////////////////
		
		
		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		} 
		
		$sql = "SELECT player_name, player_score FROM players";
		$result = $conn->query($sql);
		
		if ($result->num_rows > 0) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
				//echo "<br> player_name: ". $row["player_name"]. " - player_score: ". $row["player_score"]. "<br>";
				array_push($testA, $row["player_name"]);
				array_push($testB, $row["player_score"]);
			
			}
		} else {
			echo "0 results";
		}
			
		$conn->close();
		?> 

        <script>

            var testA2= <?php echo '["' . implode('", "', $testA ) . '"]' ?>;
            var testB2= <?php echo '["' . implode('", "', $testB ) . '"]' ?>;
            
            console.log(testA2);
            console.log(testB2);
        </script>


		
		<!-------------------------------------------------------------------------------------
		intro modal:-->

		<div id="intro-modal" class="modal">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title">Apple Catch</h1>
				</div>
				<div class="modal-body">
					<img src="img/introRules.png" height="100%" width="100%">
				</div>
				<div class="modal-footer">
					<button id="play-button" class="modal-button">Play</button>
				</div>
			</div>
		</div>

		<!-------------------------------------------------------------------------------------
		score modal:-->

		<div id="score-modal" class="modal">
			<div class="modal-content">
				<!--<div class="modal-header">
					<h1 class="modal-title">Time's up!</h1>
				</div>-->
				<div class="modal-body">
					<div id="final-score"></div>
					
					<div class="score-modal-container ">

						<div class="TEST1">TEST1</div>
						<div class="TEST2">TEST2</div>

						<div id="scores-container">

							<!--
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>
							<div class= "testA">testA</div>
							<div class= "testB">testB</div>

							<div class= "testA">testAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestAtestA</div>
							
							-->
						</div>

						<div class="replay-button-container"><button id="replay-button" class="modal-button">Play again?</button></div>
					</div>

				</div>
			</div>
		</div>

		<!-------------------------------------------------------------------------------------
		canvas layers:-->

		<div class="canvas-container">
			<canvas id="basket" class="layer3" width="873" height="640"></canvas>
			<canvas id="apple1" class="layer2" width="873" height="640"></canvas>  
			<canvas id="apple2" class="layer2" width="873" height="640"></canvas>
			<canvas id="apple3" class="layer2" width="873" height="640"></canvas>  
			<canvas id="apple4" class="layer2" width="873" height="640"></canvas>  
			<canvas id="apple5" class="layer2" width="873" height="640"></canvas>    
			<canvas id="background" class="layer1" width="873" height="640"></canvas>
			<div id="timer" class="layer3"></div>
			<div id="score" class="layer3"></div>
		</div>
	
	</body>

</html>

