<?php

include __DIR__ . '\db_connexion.php';

$stmt = $pdo->query('SELECT presentation_id, title, description FROM presentation');
$results = $stmt->fetchAll();

echo json_encode($results);
?>
