<?php

include __DIR__ . '\db_connexion.php';

try {
    if (isset($_GET['continent_id'])) {
        $continent_id = intval($_GET['continent_id']);
        $stmt = $pdo->prepare(
            "SELECT habitat_id, nom, description, image, commentaire_habitat, continent_id 
            FROM habitat 
            WHERE continent_id = :continent_id"
        );
        $stmt->bindParam(':continent_id', $continent_id, PDO::PARAM_INT);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($results as &$row) {
            if (!empty($row['image'])) {
                $row['image'] = base64_encode($row['image']);
            }
        }
        unset($row);

        if ($results === false) {
            error_log('No habitats found.');
            echo json_encode([]);
        } else {
            error_log('Fetched habitats: ' . json_encode($results));
            echo json_encode($results);
        }
    } else {
        echo json_encode(["message" => "Invalid request."]);
    }
} catch (PDOException $e) {
    echo json_encode(["message" => "Erreur: " . $e->getMessage()]);
    error_log('PDOException: ' . $e->getMessage());
}
?>
