<?php

include __DIR__ . '\db_connexion.php';

$stmt = $pdo->query('SELECT `service_id`,`nom`,`description` FROM `service` WHERE 1;');
$results = $stmt->fetchAll();

echo json_encode($results);
?>
