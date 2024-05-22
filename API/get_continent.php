<?php

include __DIR__ . '\db_connexion.php';

try {
    $stmt = $pdo->query("SELECT continent_id, nom, image FROM continent");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Encode l'image en bbase64
    foreach ($results as &$row) {
        if (!empty($row['image'])) {
            $row['image'] = base64_encode($row['image']);
        }
    }
    unset($row);

    if ($results === false) {
        error_log('Aucun continent trouvé.');
        echo json_encode([]);
    } else {
        // error_log('Continents récupérés: ' . json_encode($results));
        echo json_encode($results);
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur: " . $e->getMessage()]);
    error_log('PDOException: ' . $e->getMessage());
}
?>
