<?php

include __DIR__ . '\db_connexion.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$stmt = $pdo->query('SELECT presentation_id, title, description FROM presentation');
$results = $stmt->fetchAll();

echo json_encode($results);
?>
