<!DOCTYPE html>
<html>
<body>

<?php
$servername = "localhost";
$username = "########";
$password = "######";
$dbname = "#######";

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
        $test= $row["player_name"];
    }
} else {
    echo "0 results";
}

$conn->close();
?> 


<script>

  var test2 = "<?php echo $test ?>"; 

   console.log(test2);

</script>



</body>
</html>