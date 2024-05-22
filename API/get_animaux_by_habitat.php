<?php

include __DIR__ . '\db_connexion.php';

try {
    if (isset($_GET['habitat_id'])) {
        $habitat_id = intval($_GET['habitat_id']);
        $stmt = $pdo->prepare(
            "SELECT habitat_id, prenom, description, image, compteur, habitat_id 
            FROM animal 
            WHERE habitat_id = :habitat_id"
        );
        $stmt->bindParam(':habitat_id', $habitat_id, PDO::PARAM_INT);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($results as &$row) {
            if (!empty($row['image'])) {
                $row['image'] = base64_encode($row['image']);
            }
        }
        unset($row);

        if ($results === false) {
            error_log('Pas d\'animal trouvé.');
            echo json_encode([]);
        } else {
            error_log('animal trouvé: ' . json_encode($results));
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
