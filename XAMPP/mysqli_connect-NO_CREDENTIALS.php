<?php

    //define credentials:
    DEFINE("DB_HOST", "********");
    DEFINE("DB_USER", "********");
    DEFINE("DB_PASSWORD", "********");
    DEFINE("DB_NAME", "********");

    //create connection ('@' subdues errors in browser):
    $dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
    OR dies ("Could not connect to MYSQL: " . mysqli_connect_error()); //terminate with error message on fail

?> 
