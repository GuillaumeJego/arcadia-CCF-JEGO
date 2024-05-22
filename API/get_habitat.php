<?php

include __DIR__ . '\db_connexion.php';

try {
    $stmt = $pdo->query("SELECT `habitat_id`,`nom`,`description`,image,`commentaire_habitat`,`continent_id` FROM `habitat`");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Encode l'image en bbase64
    foreach ($results as &$row) {
        if (!empty($row['image'])) {
            $row['image'] = base64_encode($row['image']);
        }
    }
    unset($row); //

    if ($results === false) {
        error_log('No continents found.');
        echo json_encode([]);
    } else {
        error_log('Fetched continents: ' . json_encode($results));
        echo json_encode($results);
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur: " . $e->getMessage()]);
    error_log('PDOException: ' . $e->getMessage());
}
?>
