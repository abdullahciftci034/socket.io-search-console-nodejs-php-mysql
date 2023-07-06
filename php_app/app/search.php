<?php 

// // Hataları raporlamak için hata düzeyini ayarlayın
// error_reporting(E_ALL);

// // Hataların ekrana basılmasını sağlayın
// ini_set('display_errors', 1);
header('Content-Type: application/json');
$search = @$_POST['search'];
if (!empty($search)) {
    require_once "conn.php";
    $sql = "SELECT * FROM searchs WHERE `title` LIKE '%$search%'  OR  `description` LIKE '%$search%'"; // SQL query to search for the search term
    $stmt = $connection->query($sql);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} else {
    echo json_encode([]);
}
$search = @$_GET['search'];
if (!empty($search)) {
    require_once "conn.php";
    $sql = "SELECT * FROM searchs WHERE `title` LIKE '%$search%'  OR  `description` LIKE '%$search%'"; // SQL query to search for the search term
    $stmt = $connection->query($sql);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    var_dump($result);
}