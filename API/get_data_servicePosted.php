<?php

include __DIR__ . '\db_connexion.php';

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
$stmt = $pdo->query('SELECT `service_id`,`nom`,`description` FROM `service` WHERE 1;');
$results = $stmt->fetchAll();

echo json_encode($results);
?>
