<?php

include __DIR__ . '\db_connexion.php';

try {
    if (isset($_GET['groupe_service_id'])) {
        $groupe_service_id = intval($_GET['groupe_service_id']);
        $stmt = $pdo->prepare(
            "SELECT service_id, nom, description, image, conclusion, groupe_service_id 
            FROM `service`
            WHERE groupe_service_id = :groupe_service_id"
        );
        $stmt->bindParam(':groupe_service_id', $groupe_service_id, PDO::PARAM_INT);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($results as &$row) {
            if (!empty($row['image'])) {
                $row['image'] = base64_encode($row['image']);
            }
        }
        unset($row);

        if ($results === false) {
            error_log('Pas de service trouvé');
            echo json_encode([]);
        } else {
            error_log('Services trouvés: ' . json_encode($results));
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
