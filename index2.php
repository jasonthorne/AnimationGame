<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "########";
$password = "######";
$dbname = "#######";

////////////////////////
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
        echo "<br> player_name: ". $row["player_name"]. " - player_score: ". $row["player_score"]. "<br>";
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



</body>
</html>