<?php

include __DIR__ . '\db_connexion.php';

$stmt = $pdo->query('SELECT `avis_id`,`pseudo`,`commentaire` FROM `avis` WHERE `isVisible` = true;');
$results = $stmt->fetchAll();

echo json_encode($results);
?>
