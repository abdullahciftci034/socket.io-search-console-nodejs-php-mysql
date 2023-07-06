<?php 
$host     = "mysql_app:3306";//Ip of database, in this case my host machine
$user     = "root";	//Username to use
$pass     = "abdullah123";//Password for that user
$dbname   = "search_app";//Name of the database

try {
    $connection = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e)
{ 
  echo json_encode(["error"=>$e->getMessage()]);                     
}
